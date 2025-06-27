const quoteDisplay = document.getElementById('quoteDisplay');
const quoteInput = document.getElementById('quoteInput');
const timerEl = document.getElementById('timer');
const wpmEl = document.getElementById('wpm');
const wordCountEl = document.getElementById('wordCount');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resultEl = document.getElementById('result');
const statsBox = document.getElementById('stats');
const buttonsBox = document.querySelector('.buttons');
const greetEl = document.getElementById('greeting');
let userName = '';
let startTime, timerInterval;
let started = false;
let totalWordsTyped = 0;

// Fetch with timeout helper
function fetchWithTimeout(url, timeout = 10000) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeout)
    )
  ]);
}

async function getRandomQuote() {
  try {
    const response = await fetchWithTimeout("https://api.quotable.io/random");
    const data = await response.json();
    return data.content;
  } catch (error) {
    throw new Error("Failed to fetch quote");
  }
}

async function renderQuote() {
  try {
    quoteDisplay.innerText = '⏳ Loading...';
    const quote = await getRandomQuote();
    quoteDisplay.innerHTML = '';
    quote.split('').forEach(char => {
      const span = document.createElement('span');
      span.innerText = char;
      quoteDisplay.appendChild(span);
    });
    quoteInput.value = '';
  } catch (err) {
    quoteDisplay.innerHTML = `<span style="color: red;">❌ Quote load failed. Please check your network!</span>`;
    quoteInput.disabled = true;

    setTimeout(() => {
      location.reload(); // auto-restart
    }, 5000);
  }
}

async function startGame() {
  resultEl.innerHTML = '';
  document.getElementById('instructions').style.display = 'none';
  greetEl.style.display = 'block';
  totalWordsTyped = 0;
  wordCountEl.innerText = 0;
  wpmEl.innerText = 0;
  timerEl.innerText = 0;
  started = true;

  quoteDisplay.style.display = 'block';
  quoteInput.style.display = 'block';
  statsBox.style.display = 'block';
  buttonsBox.style.display = 'block';

  quoteInput.disabled = false;
  quoteInput.focus();
  startBtn.disabled = true;
  stopBtn.disabled = false;

  await renderQuote();
  startTimer();
}

function stopGame() {
  clearInterval(timerInterval);
  quoteInput.disabled = true;
  stopBtn.disabled = true;
  startBtn.disabled = false;

  quoteDisplay.style.display = 'none';
  quoteInput.style.display = 'none';
  statsBox.style.display = 'none';
  buttonsBox.style.display = 'none';
  greetEl.style.display = 'none';
  document.getElementById('instructions').style.display = 'block';

  const time = parseInt(timerEl.innerText);
  const unfinishedWords = quoteInput.value.trim().split(/\s+/).filter(Boolean).length;
  const finalWords = totalWordsTyped + unfinishedWords;
  const wpm = time > 0 ? Math.floor((finalWords / time) * 60) : 0;

  let remark = "Keep practicing!";
  if (wpm >= 80) remark = "🔥 You Rocked!";
  else if (wpm >= 60) remark = "🌟 Excellent!";
  else if (wpm >= 40) remark = "👍 Very Good!";
  else if (wpm >= 20) remark = "🙂 Good!";

  resultEl.innerHTML = `
    <p><strong>Game Over!</strong></p>
    <p>⏱ Total Time: ${time} sec</p>
    <p>💨 WPM: ${wpm}</p>
    <p>🧠 Total Words Typed: ${finalWords}</p>
    <p>🌟 Remark: ${remark}${userName ? `, ${userName}!` : ''}</p>
  `;
}

function startTimer() {
  startTime = new Date();
  timerInterval = setInterval(() => {
    const elapsed = Math.floor((new Date() - startTime) / 1000);
    timerEl.innerText = elapsed;

    if (elapsed >= 1) {
      const currentWords = quoteInput.value.trim().split(/\s+/).filter(Boolean).length;
      const totalTyped = totalWordsTyped + currentWords;
      const wpm = Math.floor((totalTyped / elapsed) * 60);

      wpmEl.innerText = wpm;
      wordCountEl.innerText = totalTyped;
    }
  }, 1000);
}

quoteInput.addEventListener('input', () => {
  if (!started) return;

  const arrayQuote = quoteDisplay.querySelectorAll('span');
  const arrayValue = quoteInput.value.split('');

  let correct = true;

  arrayQuote.forEach((charSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      charSpan.classList.remove('correct', 'incorrect');
      correct = false;
    } else if (character === charSpan.innerText) {
      charSpan.classList.add('correct');
      charSpan.classList.remove('incorrect');
    } else {
      charSpan.classList.add('incorrect');
      charSpan.classList.remove('correct');
      correct = false;
    }
  });

  if (correct && arrayValue.length === arrayQuote.length) {
    const currentQuote = quoteDisplay.innerText.trim();
    const wordsInQuote = currentQuote.split(/\s+/).length;
    totalWordsTyped += wordsInQuote;
    renderQuote();
  }
});

startBtn.addEventListener('click', startGame);
stopBtn.addEventListener('click', stopGame);

// Name popup logic
setTimeout(() => {
  document.getElementById('namePopup').style.display = 'flex';
}, 1000);

function submitName() {
  const input = document.getElementById('usernameInput');
  userName = input.value.trim();

  if (userName === '') {
    alert('Please enter your name!');
    return;
  }

  document.getElementById('namePopup').style.display = 'none';
  greetEl.innerText = `Hello ${userName}, are you ready to test your typing speed?`;
  greetEl.style.display = 'block';
}

// 🌗 DARK MODE TOGGLE
const themeToggle = document.getElementById('themeToggle');

function setTheme(mode) {
  if (mode === 'dark') {
    document.body.classList.add('dark');
    themeToggle.innerText = '☀️ Light Mode';
  } else {
    document.body.classList.remove('dark');
    themeToggle.innerText = '🌙 Dark Mode';
  }
  localStorage.setItem('theme', mode);
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

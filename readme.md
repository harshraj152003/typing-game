# 🔤 Typing Speed Challenge Game

A fully responsive and interactive **Typing Speed Game** built with **HTML**, **CSS**, and **Vanilla JavaScript**. This project helps users practice and measure their typing speed by typing real-time quotes fetched from an API. It tracks your performance with live stats and provides detailed feedback at the end. Now includes a **Dark Mode** switch and **personalized greetings** for an enhanced user experience.

---

## 🌐 Live Project

▶️ [Play the Game Live](https://harshraj152005.github.io/typing-game/)

---

## 🧠 Features Explained

### ✅ 1. Name Prompt Popup
- A **popup box** appears 1 second after loading the page asking for the user’s name.
- The name is then used to greet the user and personalize the result message.

### ✅ 2. Random Quote Fetching (Typing Content)
- Quotes are fetched dynamically from the **[Quotable API](https://api.quotable.io)**.
- A new quote is generated every time the previous one is typed correctly.

### ✅ 3. Typing Logic
- As the user types:
  - ✅ Correct characters are highlighted **green**.
  - ❌ Incorrect characters are underlined and colored **red**.
- When the quote is completed correctly, a new one loads automatically.

### ✅ 4. Real-Time Stats Tracking
- **Timer** starts once the user clicks "Start".
- Tracks:
  - ⏱ Time spent typing
  - 💨 Words Per Minute (WPM)
  - 🧠 Total Words Typed

### ✅ 5. Start/Stop Game Control
- **Start Button** begins the game.
- **Stop Button** ends the session and freezes the stats.

### ✅ 6. Final Result Summary
- After stopping the game, a final result is displayed including:
  - Total time
  - Total WPM
  - Words typed
  - Personalized remark like:
    - 🔥 "You Rocked!"
    - 🌟 "Excellent!"
    - 👍 "Very Good"
    - 🙂 "Good"
    - 🧠 "Keep Practicing!"

### ✅ 7. WPM Feedback Scale
- Below the result, a **feedback scale** is shown:
  - `< 20` → Keep Practicing
  - `20-39` → Good
  - `40-59` → Very Good
  - `60-79` → Excellent
  - `80+` → You Rocked!

### ✅ 8. Dark Mode Feature 🌙
- A **toggle button** is fixed at the top-right of the screen.
- Allows the user to switch between **Light and Dark mode**.
- **Remembers theme preference** using `localStorage`.
- Fully styled dark mode including:
  - Background, text, input, result, stats
  - Custom colors:
    - `h1` → `wheat`
    - `#stats p` → `#007bff`
    - `#stats span` → `red`

---

## 🧰 Technologies Used

| Tech           | Purpose                                      |
|----------------|----------------------------------------------|
| **HTML5**      | Page structure                               |
| **CSS3**       | Styling, responsive layout, dark mode        |
| **JavaScript (ES6)** | Game logic, quote fetching, DOM handling  |
| **Quotable API** | Provides dynamic, real-time quote content   |
| **localStorage** | Saves theme preference across sessions     |

## 📂 File Structure

typing-game/
├── index.html # Main structure of the game
├── style.css # Styling + responsive + dark mode
├── script.js # Game logic, quote API, events
├── README.md # Project documentation

## 🖥️ How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/harshraj152005/typing-game.git
cd typing-game

2. Open index.html in your browser.
No installations or build tools required — it's 100% front-end!

## 🚀 Future Enhancements

- 🎮 Add difficulty levels (Easy, Medium, Hard)  
- 🏆 Save best WPM in `localStorage`  
- 📊 Leaderboard with top scores  
- ⏲️ Countdown challenge mode (e.g., 60-second typing test)  
- 🔊 Sound feedback for keystrokes and results  
- 🌐 Language support (multi-language typing)

---

## 🤝 Contributing

Contributions are welcome!

- Fork the repo  
- Create a branch: `feature/your-feature`  
- Commit your changes  
- Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙌 Author

Made with ❤️ by **Harsh Raj**  
GitHub: [@harshraj152005](https://github.com/harshraj152005)
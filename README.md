# 📝 To-Do List App


A lightweight and interactive To-Do List application built using **Vanilla JavaScript**, demonstrating clean DOM manipulation techniques and persistent state management using `localStorage`.

---

## 🔗 Live Demo

👉 https://clean-dom-todo-app.netlify.app/

---

## 🚀 Features

- ➕ Add new tasks
- 🔄 Update task status:
  - Single click → _In Progress_
  - Double click → _Completed_
- ❌ Remove tasks using right-click
- 💾 Persistent storage using `localStorage`
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla JS)

---

## 💡 Key Highlights

### 🚫 No `innerHTML` Usage

This project avoids using `innerHTML` entirely.

Instead, DOM elements are created and managed using:

- `document.createElement()`
- `appendChild()`
- `Object.assign()`

Benefits:

- Improves security
- Prevents XSS vulnerabilities
- Keeps code clean and structured

---

### ⚙️ DOM Injection

All UI elements are dynamically generated using JavaScript instead of static HTML.

Benefits:

- Fully dynamic rendering
- Better flexibility and scalability
- Clear separation of structure and behavior

---

### 🔗 Method Chaining

The app uses **method chaining** to create and append elements efficiently.

Benefits:

- Reduces repetitive code
- Improves readability
- Creates a cleaner coding pattern

---

### 💾 Local Storage Integration

Tasks are stored in the browser using `localStorage`.

- Tasks persist after page refresh
- Status updates are saved automatically
- Deleted tasks are permanently removed

---

## 📂 Project Structure

project/
│
├── index.html
├── style.css
└── script.js

---

## 👨‍💻 Author

Developed as a practice project to improve:

- DOM manipulation
- Event handling
- Local storage usage
- Method Chaining  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

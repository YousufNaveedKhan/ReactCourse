# Lecture 01 – Introduction to React ⚛️

## 📌 What is React?

React is a JavaScript library used to build user interfaces, especially for web applications.

It helps developers create fast, interactive, and dynamic websites by breaking the UI into reusable components.

React is focused only on the **view layer** of an application.

---

## 👨‍💻 Who Created React?

React was created by **Jordan Walke**, a software engineer at Facebook.

It was first released in 2013 and is currently maintained by **Meta (Facebook)** and a large open-source community.

---

## 🌐 What is SPA and MPA?

### 🔹 MPA (Multi Page Application)

In a Multi Page Application:
- Every time a user clicks a link, a new page is loaded from the server.
- The browser refreshes completely.
- Example: Traditional PHP or server-rendered websites.

### 🔹 SPA (Single Page Application)

In a Single Page Application:
- The page does not reload completely.
- Only the required content updates dynamically.
- It provides a faster and smoother user experience.

✅ React is primarily used to build **SPA (Single Page Applications)**.

---

## 🧩 What is JSX?

JSX stands for **JavaScript XML**.

It allows us to write **HTML-like code inside JavaScript**.

Example:

```jsx
<h2>Hello Students</h2>
````

JSX makes React code easier to read and write.

Under the hood, JSX gets converted into regular JavaScript.

---

## ⚙️ Basic React App Created in This Lecture

In this lecture, we created a simple React application using Vite.

Below is the basic example:

```jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Hello Students</h2>
      <h2>React is working!</h2>
    </div>
  )
}

export default App
```

### 📝 Explanation:

* `useState` is a React Hook used for managing state.
* `function App()` is a React component.
* The `return()` section contains JSX.
* The component is exported and rendered in the browser.

---

## 🎯 Summary of Lecture 01

* What is React
* Who created React
* SPA vs MPA
* Introduction to JSX
* Created a basic React app

This lecture focused on understanding the fundamentals before moving to deeper concepts.

More coming in the next lecture.
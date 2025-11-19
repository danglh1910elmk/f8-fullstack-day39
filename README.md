# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## File Structure

```
day-39-HW-redux-core-react-redux
├─ eslint.config.js
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.css
│  ├─ App.jsx
│  ├─ components
│  │  ├─ ConfirmModal
│  │  │  └─ index.jsx
│  │  ├─ Toast
│  │  │  └─ index.jsx
│  │  ├─ ToastContainer
│  │  │  └─ index.jsx
│  │  ├─ TodoForm
│  │  │  └─ index.jsx
│  │  ├─ TodoItem
│  │  │  └─ index.jsx
│  │  └─ TodoList
│  │     └─ index.jsx
│  ├─ index.css
│  ├─ libs
│  │  ├─ react-redux
│  │  │  ├─ Context.js
│  │  │  ├─ hooks.js
│  │  │  ├─ index.js
│  │  │  └─ Provider.jsx
│  │  └─ redux
│  │     └─ index.js
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ NotFound
│  │  │  └─ index.jsx
│  │  └─ TodoApp
│  │     └─ index.jsx
│  ├─ store
│  │  ├─ constants.js
│  │  ├─ index.js
│  │  └─ reducer.js
│  └─ utils
│     └─ helpers.js
└─ vite.config.js

```
# 👋Boilerplate React + TypeScript + Vite

<p>
  <a href="emptylink docs" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

<details>
<summary><strong>Table of Contents:</strong></summary>

- [👋Boilerplate React + TypeScript + Vite](#boilerplate-react--typescript--vite)
  - [About this project](#about-this-project)
    - [Challenges](#challenges)
    - [Features](#features)
    - [Technologies](#technologies)
  - [Demo](#demo)
    - [Screenshots](#screenshots)
    - [Liveview](#liveview)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
    - [Available Scripts](#available-scripts)
      - [Run the app Dev mode](#run-the-app-dev-mode)
      - [Lint](#lint)
      - [Preview app](#preview-app)
      - [Built app](#built-app)
  - [Folder Structure](#folder-structure)
  - [Contributing](#contributing)
  - [Author](#author)

</details>

<details>
<summary>Refrence from Vite</summary>

- This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
- Currently, two official plugins are available:
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- <strong>Expanding the ESLint configuration</strong>
   If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

  - Configure the top-level `parserOptions` property like this:

  ```js
     parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json', './tsconfig.node.json'],
      tsconfigRootDir: __dirname,
     },
  ```

  - Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
  - Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
  - Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

</details>

---

## About this project

- Description:
  - This is a boilerplate for React project using Vite, TypeScript, React Router DOM, Tailwind CSS, ESLint, and Airbnb Guide Style.
  - If needed, you can install other frameworks or libraries.

### Challenges

- Using....

### Features

- Features...

### Technologies

- This project was bootstrapped with:
  - **Vite**: <https://vitejs.dev/>
  - **React**: <https://react.dev/>
  - **React Router DOM**: <https://reactrouter.com/en/main>
  - **TypeScript**: <https://www.typescriptlang.org/>
    - React + TypeScript: <https://github.com/typescript-cheatsheets/react>
  - **Tailwind CSS**: <https://tailwindcss.com/>
  - **ESLint**: <https://eslint.org/docs/latest/rules/>
  - **Airbnb Guide Style**: <https://airbnb.io/javascript/>
    - React: <https://airbnb.io/javascript/react/>
  - ...

## Demo

### Screenshots

<details>
<summary><strong>Toggle Show/Hide:</strong></summary>

</details>

### Liveview

- Link: [Live](https//)
- Test Credentials:
  - User

   Email:
   Password:

  - Admin

   Email:
   Password:

## Getting Started

### Installation

1. Clone this respository

   ``` powershell
   git clone https://github.com/ngkhang/boilerplate-react-vite-ts.git
   ```

2. Change to the project directory

   ``` powershell
   cd boilerplate-vite-react-ts
   ```

3. Install the dependencies:

   ``` powershell
   npm install
   ```

### Environment Variables

You can also checkout .env.example file

`API_KEY`

### Available Scripts

In the project directory, you can run:

#### Run the app Dev mode

- `npm run dev`: With localhost
  Run command `npm run dev` and open <http://127.0.0.1:5173/> to view it in the browser.
- `npm run dev:host`: With localhost and network

  ``` powershell
  ➜  Local:   http://localhost:5173/
  ➜  Network: http://YOUR_IP:5173/
  ```

#### Lint

- The project uses ESLint and Airbnb Guide Style to lint the code. To run the linters, use the following commands:
  - `npm run lint`: Check lint.
  - `npm run lint:fix`: Auto fix some errors

#### Preview app

- Preview project before build production. You can run `npm run build` before preivew app.
  - `npm run preview`: With localhost
  Run command below and open <http://127.0.0.1:8080/> to view it in the browser.
  - `npm run preview:host`: With localhost and network

      ``` powershell
      ➜  Local:   http://localhost:8080/
      ➜  Network: http://YOUR_IP:8080/
      ```

#### Built app

`npm run build`: Builds the app for production to the `dist` folder.

- The project can be deployed to a variety of platforms, such as Render, Firebase, Netlify, or Vercel.

---

## Folder Structure

<details>
<summary>The code for the project is organized as follows:</summary>

``` markdown
.
├── .vscode
├── node-modules
├── public/
│   └── assets
├── src/
│   ├── components/
│   │   ├── generic/
│   │   │   ├── Header
│   │   │   └── ...
│   │   └── layouts/
│   │       ├── defaultLayout
│   │       └── index.tsx
│   ├── hooks
│   │   └── useCustom.tsx
│   ├── pages/
│   │   └── HomePage
│   │   └── PageNotPound
│   ├── routes/
│   │   └── index.tsx
│   ├── services/
│   │   └── api
│   ├── types
│   ├── utils/
│   │   ├── constants/
│   │   │   ├── dbPage.json
│   │   │   └── index.tsx
│   │   ├── functions/
│   │   │   └── handleFunc.tsx
│   │   └── helpers/
│   │       └── icons.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .editorconfig
├── .env
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.js
```

</details>

---

## Contributing

- Contributions are welcome! Please open an issue or a pull request if you have any ideas for improvement.
- Give a ⭐️ if this project helped you!

---

## Author

👤 **Khang Nguyen**

[![portfolio](https://img.shields.io/badge/my_portfolio-FE7A16?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ngkhang.onrender.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ngkhang0220)
[![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ngkhang)
[![leetcode](https://img.shields.io/badge/-LeetCode-FFA116?style=for-the-badge&logo=LeetCode&labelColor=black)](https://github.com/ngkhang)

<p align="center">
  <img src="images/masterportfolio-banner-light.png" align="center" height="150" alt="Portfolio Banner">
</p>

<h1 align="center">My Developer Portfolio</h1>
<h3 align="center">
  A clean, responsive portfolio site to showcase my skills, projects, and experience.
</h3>

<p align="center">
  <a href="https://nodejs.org/en/"><img alt="NodeJS" src="https://img.shields.io/badge/node-20.x-important?style=flat-square" /></a>
  <a href="https://www.npmjs.com/"><img alt="NPM" src="https://img.shields.io/badge/npm-10.x-blueviolet?style=flat-square" /></a>
  <a href="https://reactjs.org/"><img alt="Made With React" src="https://img.shields.io/badge/made%20with-react-61DAFB?style=flat-square" /></a>
  <a href="https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" /></a>
  <a href="http://badges.mit-license.org/"><img alt="License" src="http://img.shields.io/:license-mit-blue.svg?style=flat-square" /></a>
</p>

<p align="center">
  This repository contains the source code for my personal portfolio website.
</p>

---

## Table of Contents

- **Overview**
- **Features**
- **Getting Started**
- **Available Scripts**
- **Configuration & Customization**
- **Tech Stack**
- **Deployment**
- **License**

---

## Overview

This is my personal developer portfolio built with React.  
It highlights my skills, projects, work experience, education, and ways to get in touch with me.

I use this site as a central place to point people to when they want to know more about what I do as a developer.

---

## Features

- **Responsive UI**: Works on desktop, tablet, and mobile.
- **Config-driven content**: Most of the content lives in configuration files so it’s easy to edit.
- **Project highlights**: Showcase selected projects with links to code and live demos.
- **Experience & education**: Timeline-style sections for work and studies.
- **Contact section**: Easy ways to reach out to me.

Depending on how I configure it, the portfolio can also:

- **Integrate with GitHub** to show stats and pinned repositories.
- **Support multiple themes** so I can tweak the look and feel.

---

## Getting Started

### Prerequisites

- **Node.js** \(20.x or later recommended\)
- **npm** \(10.x or later recommended\)

You can check your versions with:

```bash
node -v
npm -v
```

### Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/Utkarsht2310/My-portfolio.git
cd My-portfolio
npm install
```

### Running the app locally

```bash
npm start
```

The app will start in development mode and usually open at `http://localhost:3000/`.

---

## Available Scripts

In the project directory, I typically use:

- **`npm start`**: Run the app in development mode.
- **`npm run build`**: Create a production build in the `build` folder.
- **`npm test`**: Run the test suite (if configured).
- **`npm run deploy`**: Deploy using GitHub Pages (if configured in `package.json`).

Refer to `package.json` for the full list of scripts.

---

## Configuration & Customization

Most of the content of this portfolio is controlled through a few key files.

### 1. Portfolio Content

- Main configuration lives in `src/portfolio.js`.
- There I can edit:
  - **Greeting / hero section**
  - **Social media links**
  - **Skills and tech stack**
  - **Work experience and internships**
  - **Education**
  - **Certifications and achievements**
  - **Blog / writing links**
  - **Contact details**

Changing values in `src/portfolio.js` automatically updates the UI.

### 2. Themes

- Themes are defined in `src/theme.js`.
- I can change the exported `chosenTheme` to switch the global color palette.
- I can also create my own theme by following the structure of the existing themes.

### 3. GitHub Integration (optional)

If I want the portfolio to show GitHub data (pinned projects, issues, etc.), I can:

1. Copy `env.example` to `.env`.
2. Set the following environment variables:

   ```bash
   GITHUB_TOKEN=your_personal_access_token
   GITHUB_USERNAME=your_github_username
   ```

3. Run the data fetcher:

   ```bash
   node git_data_fetcher.mjs
   ```

4. The script will pull data from my GitHub account and store it so the site can render it.

> **Security note**: Keep your GitHub token private and never commit it to version control.

### 4. Splash Screen / Loader

- The splash / loader behavior is controlled via the `settings` object in `src/portfolio.js`.
- To disable the splash screen:

  ```javascript
  const settings = {
    isSplash: false,
  };
  ```

- To enable it again, set `isSplash` back to `true` and customize the loader/logo in `src/components/Loader`.

### 5. Metadata & Icons

- Update `public/index.html` for page title, description, and meta tags.
- Favicons and other icons live under `public/icons`.
- The preview image for link sharing (description image) can be replaced by updating `public/icons/desc.png` (ideally 1280x640).

---

## Tech Stack

- **React** for the UI.
- **Styled-components / CSS** for styling.
- **JavaScript / ES6+**.
- Optional integrations:
  - **GraphQL / Apollo** if I decide to enable certain advanced features.

---

## Deployment

I typically deploy this portfolio using **GitHub Pages** or any static hosting provider.

### GitHub Pages (User Site)

1. Create a repository named:

   ```text
   <your-github-username>.github.io
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. Push the contents of the `build` folder to the `main` (or `master`) branch of that repository.
4. Enable GitHub Pages in the repository settings if needed.

Alternatively, I can configure the existing `npm run deploy` script to automatically build and push to a `gh-pages` branch.

---

## License

This project is licensed under the **MIT License**.  
See the `LICENSE` file in this repository for full details.
prettier-logo](https://github.com/prettier/prettier-logo) for [prettier](https://github.com/prettier/prettier) designed by @ianstormtaylor.

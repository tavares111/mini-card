
# Mini card project

This project is part of an assessment for a front-end developer role, showcasing the use of **jQuery** and **SCSS**, along with the implementation of **Webpack** for bundling and compiling assets

## 📂 Project Structure

```
mini-card/
│
├── dist/               # Compiled CSS and JS files
│   ├── css/
│   └── js/
│
├── src/                # Source files
│   ├── scss/
│   │   └── main.scss   # Main  entry point for SCSS files
│   ├── js/
│   │   └── main.js     # Main entry point for JavaScript files
│   └── index.html      # HTML file
│
├── package.json        # NPM dependencies and scripts
├── webpack.config.js   # Webpack configuration
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed. You can download Node.js [here](https://nodejs.org/).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/tavares111/mini-card.git
    cd mini-card
    ```

2. Install the project dependencies:

    ```bash
    npm install
    ```

### Development

To start the project in development mode with Webpack watching for file changes:

```bash
npm run start
```

This will compile the SCSS and JavaScript and watch for changes. The output files will be placed in the `dist/` folder.

### Production Build

For a production-ready build, run:

```bash
npm run build
```

This will generate minified CSS and JavaScript files in the `dist/` folder.

## 📄 File Descriptions

- **`src/index.html`**: The main HTML file.
- **`src/js/main.js`**: The main JavaScript file where jQuery is used.
- **`src/scss/main.scss`**: The main SCSS file for styling the project.
- **`webpack.config.js`**: Webpack configuration file that handles bundling of JS and CSS.

## 🛠️ Technologies Used

- **jQuery**: A fast, small, and feature-rich JavaScript library.
- **SCSS**: A CSS preprocessor that allows the use of variables, nested rules, and more.
- **Webpack**: A module bundler that compiles and bundles JavaScript and SCSS files.

## 🛠️ Deploy

```bash
    npm run build
    npm run deploy
```


# GetGo Admin Dashboard ⚙️

An administrative web dashboard for the GetGo application, developed as part of the Software Engineering (KTPM) coursework at the University of Science (VNUHCM). This frontend interface is built to help administrators manage platform data, user interactions, and system configurations efficiently.

## 🛠 Tech Stack

* **Framework:** React.js (Bootstrapped with Create React App)
* **Styling:** SCSS / CSS
* **Configuration:** `config-overrides.js` (used to customize Webpack configurations without ejecting)
* **Transpiler:** Babel (Custom `.babelrc` configuration)
* **Package Manager:** Yarn

## 📂 Project Structure

```text
HCMUS-20CLC-KTPM-GetGoAdmin/
├── public/                 # Static assets (HTML, favicon, etc.)
├── src/                    # Main source code (Components, Pages, Styles)
├── .babelrc                # Custom Babel configuration
├── config-overrides.js     # Webpack override settings
├── package.json            # Project dependencies and scripts
└── yarn.lock               # Dependency tree lockfile
````

## ✨ Features

*(Note: Update these based on your specific implementation)*

  * **Secure Authentication:** Admin login and session management.
  * **Data Management:** View, edit, and delete records within the GetGo system.
  * **Responsive Layout:** UI designed with SCSS for flexibility across different screen sizes.
  * **Custom Webpack Rules:** Utilizes `config-overrides.js` for enhanced build control and alias management.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

  * [Node.js](https://nodejs.org/) installed on your machine.
  * [Yarn](https://yarnpkg.com/) package manager installed.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/tblong0210/HCMUS-20CLC-KTPM-GetGoAdmin.git
    cd HCMUS-20CLC-KTPM-GetGoAdmin
    ```

2.  **Install dependencies:**
    It is recommended to use Yarn since a `yarn.lock` file is present.

    ```bash
    yarn install
    ```

3.  **Start the development server:**

    ```bash
    yarn start
    ```

    The application will open in your default browser at [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000). The page will reload if you make edits.

## 📜 Available Scripts

In the project directory, you can run:

  * **`yarn start`**: Runs the app in development mode.
  * **`yarn test`**: Launches the test runner in interactive watch mode.
  * **`yarn build`**: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

# Playwright Automation Project

---

## Description

This project contains automated tests for the PrestaShop demo site using Playwright. The tests are designed to validate the purchase flow on the PrestaShop platform.

---

## Features

- **Framework and Configuration Setup**: Implemented the Page Object Model and managed test settings via a configuration file for base URLs, wait timeouts, browser drivers, and instances.
- **Custom Functionality and Browser Configuration**: Developed custom functions for assertions and UI interactions and customized browser settings, including window size.
- **Test Lifecycle Management**: Utilized Before and After annotations/hooks for setup and cleanup.
- **Cross-Browser Compatibility and Test Suites**: Ensured tests are compatible with at least Chrome and Firefox browsers. Organized test suites for both positive and negative testing scenarios. Created test scripts that allow tests to be run on different browsers and test suites.

---

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Step-by-step instructions to get a local copy running on your machine:

1. Clone the repo

   ```sh
   git clone git@github.com:kdolecki/Playwright-task.git
   cd Playwright-task
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Start the project
   ```sh
   npm start
   ```

---

## Running Tests

### Run all tests

```sh
npm test
```

Run tests in headed mode
 ```sh
npm run test:headed
```
Run tests in a specific browser
Chrome
 ```sh
npx playwright test --project=chromium
```
Firefox
 ```sh
npx playwright test --project=firefox
```
View test report

 ```sh
npm run test:report
```
Usage

To run the tests, use one of the following commands as per your requirements. The test scripts are configured to run in both headless and headed modes, and across different browsers (Chrome and Firefox).

Why Framework and Configuration Setup?

This approach is chosen because it is the most popular and readable way to structure Playwright tests. It ensures that the tests are organized and maintainable.

Test Lifecycle Management

Utilized Before and After annotations/hooks for setup and cleanup. This ensures that each test starts with a clean state and any necessary cleanup is performed after the test runs. While screenshots on failure were not included in this setup, hooks are in place for potential enhancements.

Cross-Browser Compatibility and Test Suites

Cross-browser compatibility is achieved by configuring multiple projects within the playwright.config.js file. This makes it easy to run tests across different browsers with minimal configuration changes. It ensures that the application behaves consistently across different environments.
```

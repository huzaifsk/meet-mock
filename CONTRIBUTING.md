# Contributing to Google Meet UI Mockup

Thank you for your interest in contributing to the Google Meet UI Mockup! We appreciate your help in making this project better. This document outlines the guidelines for contributing to this repository.

## How Can I Contribute?

There are many ways you can contribute to this project:

* **Reporting Bugs:** Help us identify and fix issues by reporting bugs.
* **Suggesting Enhancements:** Share your ideas for new features or improvements.
* **Fixing Bugs:** Submit pull requests with bug fixes.
* **Implementing New Features:** Contribute new functionality to the mockup.
* **Improving Documentation:** Help us make the documentation clearer and more comprehensive.
* **Writing Tests:** Add unit or integration tests to ensure the stability of the project.
* **Creating Examples:** Show how the mockup can be used in different scenarios.

## Getting Started

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** to your local machine:
    ```bash
    git clone https://github.com/huzaifsk/meet-mock
    cd meet-mock
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will usually start the application at `http://localhost:3000` (or a similar address).

## Contribution Workflow

1.  **Create a new branch** for your feature or bug fix:
    ```bash
    git checkout -b feature/your-feature-name
    # or
    git checkout -b fix/your-bug-fix
    ```
2.  **Make your changes** to the codebase.
3.  **Commit your changes** with a clear and concise commit message. We encourage you to follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for better commit history.
    ```bash
    git commit -m "feat: Add new awesome feature"
    # or
    git commit -m "fix: Resolve issue with button styling"
    ```
4.  **Push your branch** to your fork on GitHub:
    ```bash
    git push origin feature/your-feature-name
    ```
5.  **Submit a Pull Request (PR)** through the GitHub website to the `main` branch of the main repository.

## Pull Request Guidelines

* Ensure your code follows the existing code style. This project uses ESLint and Prettier. You can run the following commands to check and fix styling issues:
    ```bash
    npm run lint
    npm run format
    ```
* Include unit tests for any new features or bug fixes. Aim for good test coverage.
* Make sure all tests pass before submitting your PR. You can run the tests using:
    ```bash
    npm run test
    ```
* Write a clear and descriptive title and description for your pull request, explaining the changes and the reasoning behind them.
* If your PR addresses a specific issue, please reference it in the description (e.g., `Fixes #123`).
* Keep your pull requests focused on a single issue or feature.
* Be prepared to address feedback and make revisions to your PR.

## Code Style

This project uses [ESLint](https://eslint.org/) for JavaScript linting and [Prettier](https://prettier.io/) for code formatting to maintain a consistent code style. Please ensure your code adheres to these standards.

You can run the following commands to help with code style:

* **Linting:**
    ```bash
    npm run lint
    ```
* **Formatting:**
    ```bash
    npm run format
    ```
* **Lint and Format (may be a combined script):**
    ```bash
    npm run lint:fix
    ```

Please run these commands before submitting your pull request to ensure your code is clean and consistent with the project's style.

## Reporting Bugs

When reporting a bug, please:

1.  **Check existing issues** to see if the bug has already been reported.
2.  **Provide clear and concise steps** to reproduce the bug.
3.  **Include details about your environment**, such as:
    * Operating system and version
    * Browser and version
    * Node.js and npm/yarn versions (if relevant)
4.  **Attach any relevant screenshots or error messages.**
5.  Be as detailed as possible in your description.

## Suggesting Enhancements

If you have an idea for a new feature or an improvement, please open a new issue with:

* A clear and descriptive title.
* A detailed explanation of the proposed enhancement.
* Use cases or scenarios where this enhancement would be beneficial.
* If possible, suggest how the enhancement could be implemented.

## Community Guidelines

Please review our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming and respectful environment for everyone.

## License

By contributing to this project, you agree that your contributions will be licensed under the [MIT License](LICENSE).

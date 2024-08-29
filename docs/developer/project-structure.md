---
id: project-structure
title: Project Structure
sidebar_position: 2
---

# Project Structure

Understanding the structure of the project is key to navigating the codebase effectively. This document provides an overview of the key directories and files, explaining their roles within the project. You can customize this template to reflect the specific structure of your project.

## Overview

Below is a general overview of the project’s directory structure. Each section describes the purpose of a directory or file and highlights important considerations for developers.

```
/project-root
│
├── /src
│   ├── /components
│   ├── /containers
│   ├── /services
│   ├── /utils
│   ├── /styles
│   └── index.js
│
├── /public
│   ├── index.html
│   └── /assets
│
├── /config
│   ├── webpack.config.js
│   └── settings.json
│
├── /tests
│   ├── /unit
│   ├── /integration
│   └── setupTests.js
│
├── .env
├── .gitignore
├── README.md
└── package.json
```

## /src Directory

The `src` directory contains the source code for the application. This is where most of the development work will take place.

- **/components**: Contains reusable UI components that are used throughout the application. Each component should be self-contained, including its own styles and logic as needed.
- **/containers**: Contains components that are connected to the state management system (e.g., Redux, Context API). These components handle data fetching and state logic.
- **/services**: Contains code related to external API calls, data fetching, and other services that interact with external systems.
- **/utils**: Contains utility functions and helpers that can be reused across different parts of the application.
- **/styles**: Contains global styles, theme files, and other style-related assets.
- **index.js**: The entry point of the application. This file typically sets up the application and renders it to the DOM.

## /public Directory

The `public` directory contains static files that are served directly by the web server. These files are not processed by the build system and are accessible from the root URL.

- **index.html**: The main HTML file that serves as the template for the application. It includes the root `<div>` where the application will be mounted.
- **/assets**: Contains static assets such as images, fonts, and other resources that are used in the application.

## /config Directory

The `config` directory contains configuration files for the project.

- **webpack.config.js**: Configuration file for Webpack, the module bundler used to compile and bundle the application.
- **settings.json**: A custom configuration file where project-specific settings are stored.

## /tests Directory

The `tests` directory contains all the test files for the project.

- **/unit**: Contains unit tests for individual functions or components. These tests are designed to verify that each piece of the application works in isolation.
- **/integration**: Contains integration tests that verify how different parts of the application work together.
- **setupTests.js**: Configuration file for setting up the test environment. This might include setting up global variables, mocks, or test utilities.

## Root-Level Files

- **.env**: Contains environment variables for the project. These variables can be used to configure different environments (e.g., development, production).
- **.gitignore**: Specifies which files and directories should be ignored by Git. This typically includes `node_modules`, build output, and environment-specific files.
- **README.md**: The main documentation file for the project, providing an overview and instructions for developers and users.
- **package.json**: Contains metadata about the project, including dependencies, scripts, and other configurations related to the Node.js environment.

## Customizing the Structure

Depending on the complexity and requirements of your project, you might want to customize this structure. Common customizations include:

- **Adding a `/docs` directory**: If your project has extensive documentation, consider adding a `/docs` directory to house markdown files and related assets.
- **Adding a `/build` or `/dist` directory**: For projects that compile or bundle code, consider adding a `/build` or `/dist` directory where the compiled output is stored.
- **Modularization**: If your project grows large, consider splitting the `/src` directory into modules or features to better organize the codebase.

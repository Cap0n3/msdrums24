# Landing Page Template

Welcome to the **Landing Page Template** documentation. This guide will help you get started with setting up and running the project.

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   Node.js (version 18.x or higher)
-   Yarn package manager

## Getting Started

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

To install the necessary dependencies, run:

```sh
yarn
```

### 3. Start the Development Server

To start the development server, use the following command:

```sh
yarn dev
```

This will start the Vite development server and you can view your project at `http://localhost:3000` by default.

### 4. Access the Server from the Network

If you need to access the development server from other devices on your network, use the following command:

```sh
yarn dev --host
```

This will make the server accessible over your local network.

## Available Scripts

In the project directory, you can run the following scripts:

-   `yarn dev`: Starts the development server.
-   `yarn dev --host`: Starts the development server and makes it accessible over the local network.
-   `yarn build`: Builds the app for production.
-   `yarn serve`: Serves the production build locally.

## Custom Forms - Easily handle forms

This documentation details the implementation of a custom form using React, Material-UI and React-Hook-Form. It includes form definition, input component creation, and form submission handling. [Go here to learn more](./src/components/common/forms/README.md)

## Vite documentation

To learn more about Vite, visit the [Vite documentation](https://vitejs.dev/).

# Minimalistic TypeScript Express MongoDB Template

## Motivation

When building API servers in TypeScript with Express and MongoDB, developers often encounter a significant amount of boilerplate code and complex configurations. Tasks such as creating schemas, controllers, and setting up TypeScript, ESM module support, and import aliases can be daunting, especially for beginners. Moreover, existing templates often include advanced features like testing and Docker, which may not be beginner-friendly.

This template aims to simplify the process, providing a minimalistic and easy-to-use structure that allows beginners to focus on development without worrying about configuration and boilerplate code.

## Features

1. **Minimalistic**: Simple and easy to understand structure.
2. **ESM Module Support**: Supports modern JavaScript module syntax.
3. **Import Alias Support**: Easy import paths with alias support.
4. **ENV Config Support**: Manage environment variables with ease.
5. **CORS Setup**: Pre-configured CORS support.
6. **Custom Error Handler Support**: Built-in error handling.
7. **Proper Folder Structure**: Organized and scalable project structure.
8. **Boilerplate Code**: Essential code included to get started quickly.
9. **Development Server Support**: Easily run and debug your development server.

## How to Start Using It

### Step 1: Clone the Template

Run the following command to clone the template without git history:

```bash
npx degit f-z-coder/minimalistic-typescript-express-mongodb-template your-name-project
```

### Step 2: Open in Editor and Add Environment Variables

Open the project in your code editor and add a `.env` file in the root folder with the following content:

```env
MONGODB_CONNECTION_URL="your connection string"
```

### Step 3: Install Dependencies

Run this command to install all dependencies:

```bash
npm install
```

### Step 4: Start Development Server

To start the development server, run:

```bash
npm run dev
```

### Step 5: Build the Project

To build the project, run:

```bash
npm run build
```

### Step 6: Start the Server

To start the server, run:

```bash
npm start
```

## Contribution and Issues

Feel free to contribute by adding new features or reporting issues. Your contributions are welcome!

## Contact

For any inquiries or further information, message me on [LinkedIn](https://www.linkedin.com/in/faiz-shaikh713/).

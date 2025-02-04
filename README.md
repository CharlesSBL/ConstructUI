<!-- ![StructUI Logo](./Struct-UI.svg) -->

## Motivation

StructUI is a lightweight and straightforward library designed for developing web applications. It aims to simplify the process of building modern, responsive web applications by using a class-based approach to encapsulate HTML and CSS logic. StructUI addresses the common issues found in existing web frameworks, such as overly complex APIs and convoluted logic, by offering a simple, intuitive, and reusable set of building blocks.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- bun.js (version 1.1.8 or later)

## Getting Started

Follow these steps to set up and run the project.

### 1. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```sh
bun install
```

### 2. Compile the Frontend

Build the project and run the server:

```sh
bun run start
```

This will create a production-ready build of the frontend in the `dist` directory.

### 3. Open the Application

Once the bun server is running, open your browser and navigate to:

[http://localhost:3000/index.html](http://localhost:3000/index.html)

You should see the To-Do list application running.

## Project Structure

Here is an overview of the project structure:

- `./server/Server.js` -> Node.js server
- `./src/main.ts` -> Main file
- `./src/components/raw` -> All components
- `./dist` -> All build files

## Backend Options

## Scripts

The following npm scripts are available:

- `npm run node`: Run bun server for the frontend application.
- `npm run watch`: Compile src files without Node.js and watch for changes.
- `npm run clean`: Clean all compiled files in `dist`.
- `npm run start`: Run node and watch option.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

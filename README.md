<p align="center">
    <img src="./StructUI.png" alt="StructUI Logo" width="400">
</p>

<h1 align="center">StructUI</h1>

<p align="center">
    A lightweight library for developing modern, responsive web applications.
</p>

---

## 🚀 Motivation

StructUI simplifies building web applications by using a class-based approach to encapsulate HTML and CSS logic. It addresses common issues in existing web frameworks, such as overly complex APIs and convoluted logic, by offering a simple, intuitive, and reusable set of building blocks.

## 📋 Prerequisites

Ensure you have the following installed on your system:

- [bun.js](https://bun.sh) (version 1.1.8 or later)

## 🛠️ Getting Started

Follow these steps to set up and run the project.

### 1. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```sh
bun install
```

### 2. Compile and Run the Application

Build the project and run the server:

```sh
bun run start
```

This will create a production-ready build of the frontend in the `dist` directory.

### 3. Open the Application

Once the bun server is running, open your browser and navigate to:

[http://localhost:3000/index.html](http://localhost:3000/index.html)

You should see the application running.

## 📂 Project Structure

Overview of the project structure:

```plaintext
.
├── server
│   └── Server.js       # Node.js server
├── src
│   ├── main.ts         # Main file
│   └── components
│       └── raw         # All components
└── dist                # All build files
```

## 📜 Scripts

Available npm scripts:

- `npm run node`: Run bun server for the frontend application.
- `npm run watch`: Compile src files without Node.js and watch for changes.
- `npm run clean`: Clean all compiled files in `dist`.
- `npm run start`: Run node and watch option.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
    Made with ❤️ by the StructUI team
</p>

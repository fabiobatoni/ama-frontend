## Front-end AMA

[![React](https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge)](https://react.dev/)
[![Vite](https://img.shields.io/badge/-Vite-purple?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/-tailwind-3192d6?logo=tailwind&logoColor=white&style=for-the-badge)](https://tailwindcss.com)


## 1. Introduction

### 1.1 Challenge Overview

<img align="right" src="src\assets\ama-logo.svg" width="200"/>


This project aims to create a question room application.

- React 19
- WebSockets
- API requests

And understand how to implement websockets with React.


## 2. Getting Started for Developers

To set up a local copy of this repository:

- For SSH (recommended for secure, key-based authentication), use:

  ```bash
  git@github.com:fabiobatoni/ama-frontend.git
  ```

- For HTTPS (simpler setup, ideal for quick trials), use:

  ```bash
  https://github.com/fabiobatoni/ama-frontend.git
  ```

### 2.1 Installation

Follow these steps to set up the ama-frontend environment on your local
machine:

1. **Clone the Repository and Change Directory**

```bash
cd ama-frontend
```

2. **Install Project Dependencies**

In the project directory, run:

```bash
npm install
```

### 2.2 Local Development

**Prerequisite**

- Before you begin, check the version of `node` by running the command `node
--version`. According to "Minimum Runtime Requirements", **TypeScript** requires
`node` version 18.17.1 or later.

To start the redux_player, follow these steps:

1. **Run the Application**

Use the commands to run:

- Development environment

```bash
npm run dev
```

1.2 **Run backend Application**

Install backend

```bash
git@github.com:fabiobatoni/go-react-server.git
```

Use the commands to run server:
```bash
go run .\wsrs\main.go
```

2. **Access the Application**

Once the server is running, open your preferred web browser and navigate to:

- [http://localhost:5173](http://localhost:5173)
# Microfrontend Demo

A Webpack Module Federation demo with three independently served applications:

- **Container** — the host application. It loads the products and cart remotes.
- **Products** — displays ten generated product names.
- **Cart** — displays a generated cart item count.

## Requirements

- Node.js and npm
- Ports `8080`, `8081`, and `8082` available

Each application has its own `package.json` and lockfile, so install dependencies in each application directory.

## Installation

From the project root, run these commands:

```powershell
cd container
npm install
cd ..\products
npm install
cd ..\cart
npm install
cd ..
```

## Run the app

Start each application in a separate terminal, from the project root:

```powershell
cd products
npm start
```

```powershell
cd cart
npm start
```

```powershell
cd container
npm start
```

Keep all three processes running. Open **http://localhost:8080** to view the integrated app. The container loads `products` from port `8081` and `cart` from port `8082`.

If a remote fails to load, confirm its dev server is running and has finished compiling. Restart it after changing its webpack configuration.

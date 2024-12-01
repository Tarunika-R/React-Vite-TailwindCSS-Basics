# React + Vite + Tailwind CSS Basics
---

## **Getting Started**

Follow the steps below to set up and run the project:

### **1. Create the Project**
Run the following commands to create a new Vite project:

```bash
npm create vite@latest my-react-app --template 
```
Choose the `react` template and press enter.

### **2. Install Tailwind CSS**
Install Tailwind CSS and its peer dependencies:
```bash
npm install -D tailwindcss postcss autoprefixer
```

### **3. Initialize Tailwind CSS**
```bash
npm install tailwindcss init -p
```
This will create a ```tailwind.config.js``` file in the root of the project.

### **4. Configure Tailwind CSS**
Update the ```tailwind.config.js``` file to specify the paths to your template files:
```bash
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### **5. Add Tailwind CSS to Your Styles**
Create or edit the ```src/index.css``` file and include the following directives:
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### **6. Import Tailwind CSS**
Import the ```index.css``` file into the project. Open the ```src/main.jsx``` file and add this line:
```bash
import './index.css';
``` 
The updated ```main.jsx``` file should look like this:
```bash
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### **7. Run the Development Server**
Start the development server with:
```bash
npm run dev
```

### **8. Verify Tailwind CSS**
Test if Tailwind CSS is working by replacing the ```App.jsx``` content with:
```bash
export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Hello, Tailwind CSS with React and Vite!
      </h1>
    </div>
  );
}
```
Run the server and you should see a styled page with a centered message.
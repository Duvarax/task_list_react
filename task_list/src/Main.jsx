import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import './main.css'
import { TaskContextProvider } from './context/TaskContext'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TaskContextProvider>
      <App></App>
    </TaskContextProvider>
  </React.StrictMode>
);

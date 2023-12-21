import ReactDOM from "react-dom/client";

import App from "./components/App/App";

import "./i18n";

import "modern-normalize/modern-normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

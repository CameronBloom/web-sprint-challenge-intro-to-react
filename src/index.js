// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./App.css";

// My Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/CharacterContainer.css"
import "./components/Character.css"
import "./components/Search.css"

import { worker } from "./mocks/browser";
worker.start();

ReactDOM.render(<App />, document.getElementById("root"));
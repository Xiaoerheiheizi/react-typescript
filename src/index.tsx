import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Hello from "./components/Hello";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById("root") as HTMLElement
);
// as 类型断言，有时也叫做转换。 当你比类型检查器更清楚一个表达式的类型的时候，你可以通过这种方式通知TypeScript。

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

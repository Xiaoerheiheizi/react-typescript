import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  // 类
  class Student {
    fullName: string;

    // 在构造函数的参数上使用public等同于创建了同名的成员变量
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {
      console.log(firstName, middleInitial, lastName);
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
  }

  // 接口
  interface Person {
    firstName: string;
    lastName: string;
    fullName: string;
  }

  // 类型注解
  function greeter(person: Person) {
    // return 'Hello,' + person.firstName + ' ' + person.lastName;
    return "Hello," + person.fullName;
  }

  let user = new Student("Jane", "M.", "User");
  console.log(user);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {greeter(user)}
        </a>
      </header>
    </div>
  );
};

export default App;

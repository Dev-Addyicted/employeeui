import React from "react";
import "./App.css";
import { AddEmp } from "./components/AddEmp";
import { EmpList } from "./components/EmpList";

function App() {
  return (
    <React.Fragment>
      <AddEmp />
      <EmpList />
    </React.Fragment>
  );
}

export default App;

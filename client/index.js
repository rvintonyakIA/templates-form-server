import ReactDOM from "react-dom";
import SelfServiceForm from "../src/SelfServiceForm";
import React from "react";

ReactDOM.render(
  <SelfServiceForm noteType="Render via ReactDOM.render" />,
  document.getElementById('SelfService-template-form')
);

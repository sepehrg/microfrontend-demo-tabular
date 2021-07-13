import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import LegalPerson from "./legalPerson";

export const LegalPersonParcel = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: LegalPerson,
});

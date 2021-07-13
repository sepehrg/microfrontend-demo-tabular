import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Orders from "./orders";

export const OrdersParcel = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Orders,
});

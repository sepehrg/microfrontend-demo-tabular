import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import { LegalPersonParcel } from "./components/legalPersonParcel";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  // domElementGetter,
});

export const { bootstrap, mount, unmount } = lifecycles;
export { LegalPersonParcel };

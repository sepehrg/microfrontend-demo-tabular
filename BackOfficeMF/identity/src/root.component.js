import React from "react";
import { navigateToUrl } from "single-spa";

export default function Root(props) {
  return (
    <section>
      <button onClick={() => navigateToUrl("/main/identity/page1")}>
        page 1
      </button>{" "}
      |{" "}
      <button onClick={() => navigateToUrl("/main/identity/page2")}>
        page 2
      </button>
    </section>
  );
}

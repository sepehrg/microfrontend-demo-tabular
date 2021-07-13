import React from "react";
import { openTab } from "@prolab/common";
import { LegalPersonParcel } from "@prolab/identity";
import { OrdersParcel } from "@prolab/tse";

const Navbar = (props) => {
  return (
    <section>
      <button onClick={() => openTab("legalperson", LegalPersonParcel)}>
        identity
      </button>{" "}
      | <button onClick={() => openTab("orders", OrdersParcel)}>tse</button>
    </section>
  );
};

export default Navbar;

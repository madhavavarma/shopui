import * as React from "react";

import Order from "./Order";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

export default function Review() {
  return (
    <React.Fragment>
      <Order />
      <AddressForm />
      <PaymentForm />
    </React.Fragment>
  );
}

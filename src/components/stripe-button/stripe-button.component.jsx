import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_v5vlxQIol5n1XwGm4em6FsHi001cyBY1RJ";
  const onToken = token => {
    console.log(token);
    alert("payment sucess");
  };
  return (
    <StripeCheckout
      label="pay now"
      name="clothing"
      billingAddress
      shippingAddress
      description={`your price is ${price}`}
      amount={priceForStripe}
      panelLabel="pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

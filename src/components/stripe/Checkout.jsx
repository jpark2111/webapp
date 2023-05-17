import React from 'react';
import { checkout } from '../../services/stripeService';
import { loadStripe } from '@stripe/stripe-js';
const stripe = loadStripe(
  'pk_test_51IzyWIALep86Y1moFNNX0lOvv8Lg0awQcSyz9oMxiYW5KURxkLT38y5pbfaGS4FOmWpJA9zEiJCyjgAbVmbyGypM008GBJvJQK'
);
function Checkout() {
  const onCheckout = () => {
    checkout().then(onCheckoutSuccess).catch(onCheckoutFail);
  };

  const onCheckoutSuccess = async (res) => {
    console.log(res);
    const stripePromise = await stripe;
    stripePromise.redirectToCheckout({ sessionId: res.data });
  };

  const onCheckoutFail = (err) => {
    console.log(err);
  };
  return (
    <div>
      <h1>hello</h1>
      <button onClick={onCheckout}>checkout</button>
    </div>
  );
}

export default Checkout;

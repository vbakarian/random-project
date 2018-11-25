import React, { Component } from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import './App.css';
import CheckoutForm from './components/CheckoutForm.js';

class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_RNAaBnsB4ZFTmEkgoyctVXTg">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default App;

import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

let Checkout = React.createClass({
  render() {
    return (
      <div className="page-checkout">
        <Header/>
        <div className="container">
          <h3>Smarter Checkout</h3>
        </div>
        <Footer/>
      </div>
    );
  }
});

export default Checkout;

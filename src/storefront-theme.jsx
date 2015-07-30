import { dispatcher } from 'sdk';
import App from 'components/App';
import Img from 'components/Img';
import Home from 'pages/Home';
import Product from 'pages/Product';
import Checkout from 'pages/Checkout';
import Success from 'pages/Success';
import style from 'styles/style.less'; // eslint-disable-line

const appSuffix = '@vtex.storefront-theme';

let components = [{
  name: 'App',
  constructor: App
}, {
  name: 'Img' + appSuffix,
  constructor: Img
}, {
  name: 'HomePage' + appSuffix,
  constructor: Home
}, {
  name: 'ProductPage' + appSuffix,
  constructor: Product
}, {
  name: 'CheckoutPage' + appSuffix,
  constructor: Checkout
}, {
  name: 'SuccessPage' + appSuffix,
  constructor: Success
}];

dispatcher.actions.ComponentActions.register(components);

// Enable react hot loading with external React
// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
if (module.hot) {
  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
}

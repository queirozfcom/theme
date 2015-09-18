import { actions } from 'sdk';
import ProductPage from './ProductPage';

let components = [
  {
    name: 'ProductPage@vtex.storefront-theme',
    constructor: ProductPage
  }
];

actions.ComponentActions.register(components);

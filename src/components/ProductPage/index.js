import { actions } from 'sdk';
import ProductPage from './ProductPage';

let components = [
  {
    name: 'ProductPage@pilateslovers.pilateslovers-theme',
    constructor: ProductPage
  }
];

actions.ComponentActions.register(components);

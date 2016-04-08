import { actions } from 'sdk';
import ProductPage from './ProductPage';
import AddToCartButton from 'react-proxy?name=AddToCartButton!components/AddToCartButton/AddToCartButton';

let components = [
  {
    name: 'ProductPage@pilateslovers.pilateslovers-theme',
    constructor: ProductPage
  },
  {
    name: 'AddToCartButton@pilateslovers.pilateslovers-theme',
    constructor: AddToCartButton
  }
];

actions.ComponentActions.register(components);

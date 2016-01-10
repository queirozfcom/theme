import { actions } from 'sdk';
import ProductPage from './ProductPage';
import AddToCartButton from 'react-proxy?name=AddToCartButton!components/AddToCartButton/AddToCartButton';

let components = [
  {
    name: 'ProductPage@vtex.storefront-theme',
    constructor: ProductPage
  },
  {
    name: 'AddToCartButton@vtex.storefront-theme',
    constructor: AddToCartButton
  }
];

actions.ComponentActions.register(components);

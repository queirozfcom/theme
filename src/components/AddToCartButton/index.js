import { actions } from 'sdk';
import AddToCartButton from './AddToCartButton';

let components = [
  {
    name: 'AddToCartButton@pilateslovers.pilateslovers-theme',
    constructor: AddToCartButton
  }
];

actions.ComponentActions.register(components);

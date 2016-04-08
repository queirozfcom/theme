import { actions } from 'sdk';
import AddToCartButtonEditor from './AddToCartButtonEditor/AddToCartButtonEditor';

let components = [
  {
    name: 'AddToCartButtonEditor@pilateslovers.pilateslovers-theme',
    constructor: AddToCartButtonEditor
  }
];

actions.ComponentActions.register(components);

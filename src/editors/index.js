import { actions } from 'sdk';
import ShelfEditor from './ShelfEditor/ShelfEditor';
import AddToCartButtonEditor from './AddToCartButtonEditor/AddToCartButtonEditor';

let components = [
  {
    name: 'ShelfEditor@vtex.storefront-theme',
    constructor: ShelfEditor
  },
  {
    name: 'AddToCartButtonEditor@vtex.storefront-theme',
    constructor: AddToCartButtonEditor
  }
];

actions.ComponentActions.register(components);

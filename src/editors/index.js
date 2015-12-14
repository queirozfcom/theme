import { actions, redux } from 'sdk';
import AddToCartButtonEditor from './AddToCartButtonEditor/AddToCartButtonEditor';

let components = [
  {
    name: 'AddToCartButtonEditor@vtex.storefront-theme',
    constructor: AddToCartButtonEditor
  }
];

redux.store.dispatch(redux.actionCreators.component.register(components));
actions.ComponentActions.register(components);

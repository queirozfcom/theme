import { actions, redux } from 'sdk';
import HomePage from './HomePage';

let components = [
  {
    name: 'HomePage@vtex.storefront-theme',
    constructor: HomePage
  }
];

redux.store.dispatch(redux.actionCreators.component.register(components));
actions.ComponentActions.register(components);

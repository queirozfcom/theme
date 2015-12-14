import { actions, redux } from 'sdk';
import CategoryPage from './CategoryPage';

let components = [
  {
    name: 'CategoryPage@vtex.storefront-theme',
    constructor: CategoryPage
  }
];

redux.store.dispatch(redux.actionCreators.component.register(components));
actions.ComponentActions.register(components);

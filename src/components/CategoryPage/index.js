import { actions } from 'sdk';
import CategoryPage from './CategoryPage';

let components = [
  {
    name: 'CategoryPage@pilateslovers.pilateslovers-theme',
    constructor: CategoryPage
  }
];

actions.ComponentActions.register(components);


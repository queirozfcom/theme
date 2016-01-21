import { actions } from 'sdk';
import CategoryListSidebar from './CategoryListSidebar';

let components = [
  {
    name: 'CategoryListSidebar@vtex.storefront-theme',
    constructor: CategoryListSidebar
  }
];

actions.ComponentActions.register(components);


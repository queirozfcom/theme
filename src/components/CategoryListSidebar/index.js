import { actions } from 'sdk';
import CategoryListSidebar from './CategoryListSidebar';

let components = [
  {
    name: 'CategoryListSidebar@pilateslovers.pilateslovers-theme',
    constructor: CategoryListSidebar
  }
];

actions.ComponentActions.register(components);


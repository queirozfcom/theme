import { actions } from 'sdk';
import CategoryHeader from './CategoryHeader';

let components = [
  {
    name: 'CategoryHeader@pilateslovers.pilateslovers-theme',
    constructor: CategoryHeader
  }
];

actions.ComponentActions.register(components);


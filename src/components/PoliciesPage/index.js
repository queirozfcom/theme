import { actions } from 'sdk';
import PoliciesPage from './PoliciesPage';

let components = [
  {
    name: 'PoliciesPage@pilateslovers.pilateslovers-theme',
    constructor: PoliciesPage
  }
];

actions.ComponentActions.register(components);
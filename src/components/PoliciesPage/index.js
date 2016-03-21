import { actions } from 'sdk';
import PoliciesPage from './PoliciesPage';

let components = [
  {
    name: 'PoliciesPage@vtex.storefront-theme',
    constructor: PoliciesPage
  }
];

actions.ComponentActions.register(components);
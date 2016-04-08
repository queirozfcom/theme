import { actions } from 'sdk';
import SearchPage from './SearchPage';

let components = [
  {
    name: 'SearchPage@pilateslovers.pilateslovers-theme',
    constructor: SearchPage
  }
];

actions.ComponentActions.register(components);


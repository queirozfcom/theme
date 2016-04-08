import { actions } from 'sdk';
import SearchHeader from './SearchHeader';

let components = [
  {
    name: 'SearchHeader@pilateslovers.pilateslovers-theme',
    constructor: SearchHeader
  }
];

actions.ComponentActions.register(components);


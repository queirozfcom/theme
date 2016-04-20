import { actions } from 'sdk';
import Header from './Header';

let components = [
  {
    name: 'Header@pilateslovers.pilateslovers-theme',
    constructor: Header
  }
];

actions.ComponentActions.register(components);

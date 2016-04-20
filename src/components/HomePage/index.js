import { actions } from 'sdk';
import HomePage from './HomePage';

let components = [
  {
    name: 'HomePage@pilateslovers.pilateslovers-theme',
    constructor: HomePage
  }
];

actions.ComponentActions.register(components);

import { actions } from 'sdk';
import Footer from './Footer';

let components = [
  {
    name: 'Footer@pilateslovers.pilateslovers-theme',
    constructor: Footer
  }
];

actions.ComponentActions.register(components);

import { actions } from 'sdk';
import AboutPage from './AboutPage';

let components = [
  {
    name: 'AboutPage@pilateslovers.pilateslovers-theme',
    constructor: AboutPage
  }
];

actions.ComponentActions.register(components);

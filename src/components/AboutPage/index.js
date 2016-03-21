import { actions } from 'sdk';
import AboutPage from './AboutPage';

let components = [
  {
    name: 'AboutPage@vtex.storefront-theme',
    constructor: AboutPage
  }
];

actions.ComponentActions.register(components);

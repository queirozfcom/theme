import { actions } from 'sdk';
import HomePage from './HomePage';
import Footer from 'components/Footer/Footer';

let components = [
  {
    name: 'HomePage@pilateslovers.pilateslovers-theme',
    constructor: HomePage
  },
  {
    name: 'Footer@pilateslovers.pilateslovers-theme',
    constructor: Footer
  }
];

actions.ComponentActions.register(components);

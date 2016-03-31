import { actions } from 'sdk';
import HomePage from './HomePage';
import Footer from 'components/Footer/Footer';

let components = [
  {
    name: 'HomePage@vtex.storefront-theme',
    constructor: HomePage
  },
  {
    name: 'Footer@vtex.storefront-theme',
    constructor: Footer
  }
];

actions.ComponentActions.register(components);

import { actions } from 'sdk';
import HomePage from './HomePage';
import Shelf from 'react-proxy?name=Shelf!components/Shelf/Shelf';

let components = [
  {
    name: 'HomePage@vtex.storefront-theme',
    constructor: HomePage
  },
  {
    name: 'Shelf@vtex.storefront-theme',
    constructor: Shelf
  }
];

actions.ComponentActions.register(components);

import { actions } from 'sdk';
import HomePage from './HomePage';
import Banner from 'react-proxy?name=Banner!components/Banner/Banner';
import Shelf from 'react-proxy?name=Shelf!components/Shelf/Shelf';

let components = [
  {
    name: 'HomePage@vtex.storefront-theme',
    constructor: HomePage
  },
  {
    name: 'Banner@vtex.storefront-theme',
    constructor: Banner,
  },
  {
    name: 'Shelf@vtex.storefront-theme',
    constructor: Shelf
  }
];

actions.ComponentActions.register(components);

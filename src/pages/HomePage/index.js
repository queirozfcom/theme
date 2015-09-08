import { actions } from 'sdk';
import HomePage from './HomePage';
import Banner from 'react-proxy?name=Banner!components/Banner/Banner';
import Shelf from 'react-proxy?name=Shelf!components/Shelf/Shelf';

let components = [
  {
    constructor: HomePage
  },
  {
    constructor: Banner,
  },
  {
    constructor: Shelf
  }
];

actions.ComponentActions.register(components);

// Enable react hot loading with external React
// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
if (module.hot) {
  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
}

import { actions } from 'sdk';
import HomePage from './HomePage';
import Banner from 'components/Banner/Banner';
import Shelf from 'components/Shelf/Shelf';

let components = [
  HomePage,
  Banner,
  Shelf
];

actions.ComponentActions.register(components);

// Enable react hot loading with external React
// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
if (module.hot) {
  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
}

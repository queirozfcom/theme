import { dispatcher } from 'sdk';
import HomePage from 'pages/HomePage';
import ProductPage from 'pages/ProductPage';
import Banner from 'components/banner/Banner';
import Shelf from 'components/shelf/Shelf';

const appSuffix = '@vtex.storefront-theme';

let components = [
  {
    name: 'HomePage' + appSuffix,
    constructor: HomePage
  },
  {
    name: 'ProductPage' + appSuffix,
    constructor: ProductPage
  },
  {
    name: 'Banner' + appSuffix,
    constructor: Banner
  },
  {
    name: 'Shelf' + appSuffix,
    constructor: Shelf
  }
];

dispatcher.actions.ComponentActions.register(components);

// Enable react hot loading with external React
// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
if (module.hot) {
  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
}

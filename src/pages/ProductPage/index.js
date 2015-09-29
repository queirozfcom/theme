import { actions } from 'sdk';
import ProductPage from './ProductPage';
import AddToCartButton from 'react-proxy?name=AddToCartButton!components/AddToCartButton/AddToCartButton';
import SelectVariation from  'react-proxy?name=SelectVariation!components/Product/SelectVariation';


let components = [
  {
    name: 'ProductPage@vtex.storefront-theme',
    constructor: ProductPage
  },
  {
    name: 'AddToCartButton@vtex.storefront-theme',
    constructor: AddToCartButton
  },
  {
    name: 'SelectVariation@vtex.storefront-theme',
    constructor: SelectVariation
  }
];

actions.ComponentActions.register(components);

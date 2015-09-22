import { actions } from 'sdk';
import ProductPage from './ProductPage';
import AddToCartButton from 'react-proxy?name=AddToCartButton!components/AddToCartButton/AddToCartButton';
import SkuSelector from 'components/Product/SkuSelector';


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
    name: 'SkuSelector@vtex.storefront-theme',
    constructor: SkuSelector
  }
];

actions.ComponentActions.register(components);

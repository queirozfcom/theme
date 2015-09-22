import { actions } from 'sdk';
import BannerEditor from './BannerEditor/BannerEditor';
import ShelfEditor from './ShelfEditor/ShelfEditor';
import AddToCartButtonEditor from './AddToCartButtonEditor/AddToCartButtonEditor';

let components = [
  {
    name: 'BannerEditor@vtex.storefront-theme',
    constructor: BannerEditor
  },
  {
    name: 'ShelfEditor@vtex.storefront-theme',
    constructor: ShelfEditor
  },
  {
    name: 'AddToCartButtonEditor@vtex.storefront-theme',
    constructor: AddToCartButtonEditor
  }
];

actions.ComponentActions.register(components);

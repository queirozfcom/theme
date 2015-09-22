import { actions } from 'sdk';
import BannerEditor from './BannerEditor/BannerEditor';
import ShelfEditor from './ShelfEditor/ShelfEditor';
import AddToCartButtonEditor from './AddToCartButtonEditor/AddToCartButtonEditor';
import SkuSelectorEditor from './ProductEditor/SkuSelectorEditor';

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
  },
  {
    name: 'SkuSelectorEditor@vtex.storefront-theme',
    constructor: SkuSelectorEditor
  }
];

actions.ComponentActions.register(components);

import { actions } from 'sdk';
import BannerEditor from './BannerEditor/BannerEditor';
import ShelfEditor from './ShelfEditor/ShelfEditor';
import AddToCartButtonEditor from './AddToCartButtonEditor/AddToCartButtonEditor';
import SelectVariationEditor from './SkuSelectorEditor/SelectVariationEditor';

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
    name: 'SelectVariationEditor@vtex.storefront-theme',
    constructor: SelectVariationEditor
  }
];

actions.ComponentActions.register(components);

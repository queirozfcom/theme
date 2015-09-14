import { actions } from 'sdk';
import BannerEditor from './BannerEditor/BannerEditor';
import ShelfEditor from './ShelfEditor/ShelfEditor';

let components = [
  {
    name: 'BannerEditor@vtex.storefront-theme',
    constructor: BannerEditor
  },
  {
    name: 'ShelfEditor@vtex.storefront-theme',
    constructor: ShelfEditor
  }
];

actions.ComponentActions.register(components);

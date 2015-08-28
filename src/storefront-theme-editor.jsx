import { dispatcher } from 'sdk';
import ShelfEditor from 'editors/shelf/ShelfEditor';
import BannerEditor from 'editors/banner/BannerEditor';

let components = [
  {
    name: 'ShelfEditor@vtex.storefront-theme',
    constructor: ShelfEditor
  },
  {
    name: 'BannerEditor@vtex.storefront-theme',
    constructor: BannerEditor
  }
];

dispatcher.actions.ComponentActions.register(components);

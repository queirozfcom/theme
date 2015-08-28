import { dispatcher } from 'sdk';
import ShelfEditor from 'editors/shelf/ShelfEditor';
import BannerEditor from 'editors/banner/BannerEditor';

let components = [
  {
    name: 'ShelfEditor',
    constructor: ShelfEditor
  },
  {
    name: 'BannerEditor',
    constructor: BannerEditor
  }
];

dispatcher.actions.ComponentActions.register(components);

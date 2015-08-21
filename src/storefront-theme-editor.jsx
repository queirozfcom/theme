import { dispatcher } from 'sdk';
import ShelfEditor from 'editors/shelf/ShelfEditor';
import ShelfEditMode from 'editors/shelf/ShelfEditMode';
import BannerEditor from 'editors/banner/BannerEditor';
import BannerEditMode from 'editors/banner/BannerEditMode';

let components = [
  {
    name: 'ShelfEditor',
    constructor: ShelfEditor
  },
  {
    name: 'ShelfEditMode',
    constructor: ShelfEditMode
  },
  {
    name: 'BannerEditor',
    constructor: BannerEditor
  },
  {
    name: 'BannerEditMode',
    constructor: BannerEditMode
  }
];

dispatcher.actions.ComponentActions.register(components);

import { actions } from 'sdk';
import BannerEditor from './BannerEditor/BannerEditor';
import ShelfEditor from './ShelfEditor/ShelfEditor';

let components = [
  BannerEditor,
  ShelfEditor
];

actions.ComponentActions.register(components);

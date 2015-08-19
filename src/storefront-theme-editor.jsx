import { dispatcher } from 'sdk';
import ShelfEditor from 'editors/shelf/ShelfEditor';
import ShelfEditMode from 'editors/shelf/ShelfEditMode';

let components = [
  {
    name: 'ShelfEditor',
    constructor: ShelfEditor
  },
  {
    name: 'ShelfEditMode',
    constructor: ShelfEditMode
  }
];

dispatcher.actions.ComponentActions.register(components);

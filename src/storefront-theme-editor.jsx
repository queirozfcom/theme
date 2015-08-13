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

// Enable react hot loading with external React
// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
if (module.hot) {
  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
}

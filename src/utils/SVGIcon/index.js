import { actions } from 'sdk';
import SVGIcon from './SVGIcon';

const components = [
  {
    name: 'SVGIcon@pilateslovers.pilateslovers-theme',
    constructor: SVGIcon
  }
];

actions.ComponentActions.register(components);

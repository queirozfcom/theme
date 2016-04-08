import { actions } from 'sdk';
import DefaultTemplate from './DefaultTemplate';

let components = [
  {
    name: 'DefaultTemplate@pilateslovers.pilateslovers-theme',
    constructor: DefaultTemplate
  }
];

actions.ComponentActions.register(components);

import { actions } from 'sdk';
import DefaultTemplate from './DefaultTemplate';

let components = [
  {
    name: 'DefaultTemplate@vtex.storefront-theme',
    constructor: DefaultTemplate
  }
];

actions.ComponentActions.register(components);

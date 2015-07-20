import React from 'react';
import { dispatcher } from 'sdk';
import DocumentTitle from 'react-document-title';
import { RouteHandler, State } from 'react-router';
import Header from './header/Header';
import Footer from './footer/Footer';
import { IntlMixin } from 'react-intl';

let App = React.createClass({
  mixins: [ IntlMixin, State ],

  componentWillMount() {
    dispatcher.actions.CartActions.requestCart();
  },

  render() {
    return (
      <DocumentTitle title='Dreamstore'>
        <div className="page-perspective">
          <RouteHandler/>
        </div>
      </DocumentTitle>
    );
  }
});

export default App;

import React from 'react';
import { dispatcher } from 'sdk';
import DocumentTitle from 'react-document-title';
import { RouteHandler, State } from 'react-router';
import Header from './header/Header';
import Footer from './footer/Footer';
import { IntlMixin } from 'react-intl';

let App = React.createClass({
  mixins: [ IntlMixin, State ],

  getHandlerKey: function () {
    var childName = this.getRoutes()[0].name;
    var id = this.getParams().id;
    return childName + id;
  },

  componentWillMount() {
    dispatcher.actions.CartActions.requestCart();
  },

  render() {
    let accountName = dispatcher.stores.ShopStore.state.get('accountName');
    return (
      <DocumentTitle title='Dreamstore'>
        <div className={'ds-' + accountName}>
          <Header />
          <div className="page-perspective">
            <RouteHandler key={this.getHandlerKey()}/>
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
});

export default App;

import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer/Footer';
import Newsletter from 'components/Newsletter/Newsletter';
import { stores } from 'sdk';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

class DefaultTemplate extends React.Component {
  render() {
    return (
      <div className="DefaultTemplate">
        <Header />
          <Placeholder
            id="body"
            params={this.props.params}
            location={this.props.location}
          />
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default DefaultTemplate;

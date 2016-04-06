import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer/Footer';
import './spinner.less';
import './DefaultTemplate.less'
import { stores } from 'sdk';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

class DefaultTemplate extends React.Component {

    componentWillMount() {
      this.setState({ loading: false });

      stores.ContextStore.listen(this.onChange);
    }

    componentWillUnmount() {
      stores.ContextStore.unlisten(this.onChange);
    }

    onChange = (ContextStore) => {
      this.setState({ loading: ContextStore.get('loading') });
    }

  render() {
    const loading = this.state.loading ?
      <div className="DefaultTemplate__spin-wrap">
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      </div> : null;
    return (
      <div className="DefaultTemplate">
        { loading }
        <Header />
          <Placeholder
            id="body"
            params={this.props.params}
            location={this.props.location}
          />
        <Footer/>
      </div>
    );
  }
}

export default DefaultTemplate;

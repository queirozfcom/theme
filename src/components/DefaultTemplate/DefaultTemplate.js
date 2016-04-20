import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
      <div className="DefaultTemplate__spin-wrap" key="spinner">
        <div className="spinner">
          <div className="dot1"></div>
          <div className="dot2"></div>
        </div>
      </div> : null;

    return (
      <div className="DefaultTemplate">
        <ReactCSSTransitionGroup
          transitionName="Loading"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={100}
        >
          { loading }
        </ReactCSSTransitionGroup>
        <Placeholder
          id="header"
        />
        <Placeholder
          id="body"
          params={this.props.params}
          location={this.props.location}
        />
        <Placeholder
          id="footer"
        />
      </div>
    );
  }
}

export default DefaultTemplate;

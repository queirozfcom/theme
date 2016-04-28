import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './spinner.less';
import './DefaultTemplate.less'
import { stores, history } from 'sdk';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

let previousLocation;
const unlisten = history.listen(location => {
  const scrollTo = (element, to, duration) => {
    if (duration <= 0) {
      return;
    }

    const difference = to - element.scrollTop;
    const perTick = difference / duration * 10;

    setTimeout(() => {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) {
        return;
      }

      scrollTo(element, to, duration - 10);
    }, 10);
  };

  setTimeout(() => {
    const isPathEqual = previousLocation === location.pathname;
    const isPOPAction = location.action === 'POP';

    if (isPathEqual || isPOPAction) {
      return;
    }

    scrollTo(document.body, 0, 200);
    previousLocation = location.pathname;
  });
});

class DefaultTemplate extends React.Component {
    componentWillMount() {
      this.setState({ loading: false });
      stores.ContextStore.listen(this.onChange);
    }

    componentWillUnmount() {
      if (this.loadTimeout) {
        clearInterval(this.loadTimeout);
      }
      unlisten();
      stores.ContextStore.unlisten(this.onChange);
    }

    onChange = (ContextStore) => {
      const loading = ContextStore.get('loading');

      if (this.loadTimeout) {
        clearTimeout(this.loadTimeout);
        this.loadTimeout = null;
      }

      if (this.state.loading && !loading) {
        this.setState({ loading });
        return;
      }

      this.loadTimeout = setTimeout(() => this.setState({ loading }), 200);
    }

  render() {
    const loading = this.state.loading ?
      <div className="DefaultTemplate__spin-wrap" key="spinner">
        <div className="spinner">
          <div className="dot1" />
          <div className="dot2" />
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
          id="metrics"
        />
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

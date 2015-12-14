import React from 'react';
import { stores, actions, utils, Area } from 'sdk';
import Header from 'components/Header/Header';
import CategoryHeader from 'components/CategoryHeader/CategoryHeader';
import Footer from 'components/Footer/Footer';

import { connect } from 'react-redux';
import { redux } from 'sdk';

@connect((state) => {
  const currentURL = window.location.pathname + window.location.search;

  return {
    facets: state.SDK.facets.getIn([currentURL, 'category']),
    pageResources: state.SDK.resource.get(currentURL)
  };
})
class CategoryPage extends React.Component {
  state = {
    skipRender: false,
    grid: false
  }

  componentWillMount() {
    this.getResources();
  }

  componentDidUpdate() {
    this.getResources();
  }

  shouldComponentUpdate({ facets }) {
    if (this.state.skipRender && !facets) {
      return false;
    }

    return true;
  }

  componentWillReceiveProps({ facets }) {
    if (!facets) {
      this.setState({ skipRender: false });
    }
  }

  getResources = () => {
    const currentURL = window.location.pathname + window.location.search;
    const actionConfig = {
      currentURL,
      id: 'category',
      params: this.props.params,
      query: this.props.location.query
    };

    if (!this.props.pageResources) {
      this.props.dispatch(redux.actionCreators.resource.getAreaResources(actionConfig));
    }
  }

  changeLayout = () => {
    this.setState({ grid: !this.state.grid });
  }

  skipPageRender = () => {
    this.setState({ skipRender: true });
  }

  render() {
    let content;

    if (this.props.facets) {
      let category = this.props.facets.getIn(['filters', 'category']).first();
      let filters = this.props.facets.getIn(['filters']).takeWhile(function(value, key) {
        return key !== 'category';
      });
      content = category ?
        (
          <div>
            <Header areaPath="category" />
            <CategoryHeader
              category={category}
              filters={filters}
              grid={this.state.grid}
              location={this.props.location}
              changeLayout={this.changeLayout}
              skipPageRender={this.skipPageRender}
            />
            <Area
              id="category/product-list"
              location={this.props.location}
              grid={this.state.grid}
              qty={category.get('productQuantity')}
              skipPageRender={this.skipPageRender}
            />
            <Footer />
          </div>
        ) :
        (
          <div>
            <h1>Redirect para busca!</h1>
          </div>
        );
    } else {
      content = (
        <h1>Carregando...</h1>
      );
    }

    return content;
  }
}

export default CategoryPage;

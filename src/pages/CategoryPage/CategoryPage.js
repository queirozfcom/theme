import React from 'react';
import { stores, actions } from 'sdk';
import Header from 'components/Header';
import Footer from 'components/Footer/Footer';
import ProductListSidebar from 'components/ProductListSidebar/ProductListSidebar';
import './CategoryPage.less';

const Area = stores.ComponentStore.state.getIn(['Area@vtex.storefront-sdk', 'constructor']);

class CategoryPage extends React.Component {
  state = {
    grid: false
  }

  componentWillMount() {
    this.getResources();
  }

  componentDidUpdate() {
    this.getResources();
  }

  getResources = () => {
    let path = window.location.pathname + window.location.search;
    let actionConfig = {
      currentURL: path,
      id: 'category',
      params: this.props.params,
      query: this.props.location.query
    };

    if (!stores.ResourceStore.getState().get(path)) {
      actions.AreaActions.getAreaResources(actionConfig);
    }
  }

  changeLayout = () => {
    this.setState({ grid: !this.state.grid });
  }

  render() {
    return (
      <div className="CategoryPage">
        <Header areaPath="category" />
        <Area
        id="category/category-header"
        grid={this.state.grid}
        location={this.props.location}
        changeLayout={this.changeLayout}
        />
        <div className="theme__width">

          <div className="CategoryPage__content row">
            <div className="CategoryPage__sidebar col-lg-2 col-sm-3 hidden-xs hidden-sm">
              <ProductListSidebar />
            </div>
            <div className="col-lg-10 col-sm-9 CategoryPage__product-list">
              <Area
              id="category/product-list"
              areaPath="category"
              location={this.props.location}
              grid={this.state.grid}
              />
            </div>
          </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default CategoryPage;

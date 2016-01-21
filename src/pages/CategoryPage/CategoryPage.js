import React from 'react';
import { stores, actions } from 'sdk';
import Header from 'components/Header';
import Footer from 'components/Footer/Footer';
import FilterListSidebar from 'components/FilterListSidebar/FilterListSidebar';
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
        <div className="CategoryPage__content container-fluid">
          <div className="row">
            <div className="CategoryPage__sidebar hidden-xs hidden-sm col-md-3 col-lg-2">
              <div className="CategoryPage__category-list">
                <Area
                  id="category/category-list-sidebar"
                  location={this.props.location}
                />
              </div>
              <div className="CategoryPage__filter-list">
                <FilterListSidebar location={this.props.location} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-10 CategoryPage__product-list">
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

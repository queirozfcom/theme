import React from 'react';
import { stores, connectToStores } from 'sdk';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './CategoryHeader.less';
import ExplorerButton from './ExplorerButton/ExplorerButton';
import ExplorerPanel from './ExplorerPanel/ExplorerPanel';
import OrderSelector from './OrderSelector/OrderSelector';
import SVGIcon from 'utils/SVGIcon';
import listIcon from 'assets/icons/list_icon.svg';
import listImg from 'assets/icons/list_icon.png';
import gridIcon from 'assets/icons/grid_icon.svg';
import gridImg from 'assets/icons/grid_icon.png';

const Area = stores.ComponentStore.state.getIn(['Area@vtex.storefront-sdk', 'constructor']);

@connectToStores()
class CategoryHeader extends React.Component {
  state = {
    isFilterPanelOpen: false,
    isExplorerPanelOpen: false
  }

  static getStores() {
    return [
      stores.ContextStore,
      stores.FacetsStore
    ];
  }

  static getPropsFromStores(props) {
    let path = props.location.pathname + props.location.search;
    let facets = stores.FacetsStore.getState().getIn([path, 'category/category-header']);
    let category = facets ? facets.getIn(['filters', 'category']).first() : undefined;

    return {
      category
    };
  }

  shouldComponentUpdate({ category }) {
    return category !== undefined;
  }

  handleGridTap = () => {
    this.props.changeLayout();
  }

  toggleFilterPanel = (bool) => {
    return () => {
      if (bool) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }

      this.setState({ isFilterPanelOpen: bool });
    };
  }

  toggleExplorerPanel = (bool) => {
    return () => {
      this.setState({ isExplorerPanelOpen: bool });
    };
  }

  render() {
    if (!this.props.category) {
      return null;
    }

    let layoutName = this.props.grid ? 'Grid' : 'Lista';
    let explorerButton = null;
    let explorerPanel = null;
    const icon = {
      svg: this.props.grid ? gridIcon : listIcon,
      img: this.props.grid ? gridImg : listImg
    };

    if (this.props.category.get('children').count() > 0) {
      explorerButton = (
        <ExplorerButton openExplorerPanel={this.toggleExplorerPanel(true)} />
      );

      if (this.state.isExplorerPanelOpen) {
        explorerPanel = (
          <ExplorerPanel
            category={this.props.category}
            isOpen={this.state.isExplorerPanelOpen}
            closeExplorerPanel={this.toggleExplorerPanel(false)}
          />
        );
      }
    }

    return (
      <nav className="CategoryHeader">
        <div className="CategoryHeader__container container-fluid clearfix">
          <div className="CategoryHeader__content clearfix">
            <h1 className="CategoryHeader__title">
              { this.props.category.get('name') }
            </h1>
            <div className="CategoryHeader__explorer-button hidden-md hidden-lg">
              { explorerButton }
            </div>
            <span className="CategoryHeader__results">
              { this.props.category.get('productQuantity') } Resultados
            </span>
          </div>
          <div className="CategoryHeader__buttons">
            <div className="CategoryHeader__filter-button hidden-md hidden-lg">
              <Area
                id="category/filter-button"
                intention="filter-button"
                openFilterPanel={this.toggleFilterPanel(true)}
              />
            </div>
            <div className="CategoryHeader__grid-button" onTouchTap={this.handleGridTap}>
              <SVGIcon
                className="CategoryHeader__icon"
                svg={icon.svg}
                fallback={icon.img}
                height={20}
                cleanupExceptions={['width', 'height']}
                fill="#777777"
              />
              <span className="CategoryHeader__icon-label visible-md visible-lg">
                { layoutName }
              </span>
            </div>
          </div>
          <div className="hidden-xs hidden-sm">
            <OrderSelector location={this.props.location} />
          </div>
          <div>
            <Area
              id="category/filter-panel"
              intention="filter-panel"
              areaPath="category"
              location={this.props.location}
              isOpen={this.state.isFilterPanelOpen}
              closeFilterPanel={this.toggleFilterPanel(false)}
            />
          </div>
          <ReactCSSTransitionGroup
            transitionName="ExplorerPanel"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={250}
          >
            { explorerPanel }
          </ReactCSSTransitionGroup>
        </div>
      </nav>
    );
  }
}

export default CategoryHeader;

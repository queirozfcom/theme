import React from 'react';
import { stores, connectToStores } from 'sdk';
import './SearchHeader.less';
import SVGIcon from 'utils/SVGIcon';
import listIcon from 'assets/icons/list_icon.svg';
import listImg from 'assets/icons/list_icon.png';
import gridIcon from 'assets/icons/grid_icon.svg';
import gridImg from 'assets/icons/grid_icon.png';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

@connectToStores()
class SearchHeader extends React.Component {
  state = {
    isFilterPanelOpen: false
  }

  static getStores() {
    return [
      stores.ContextStore,
    ];
  }

  static getPropsFromStores(props) {
    let path = props.location.pathname + props.location.search;
    let productSearch = stores.SearchStore.getState().getIn([path]);
    let results = productSearch ? productSearch.first().getIn(['results']) : undefined;
    let qty = results? results.length : 0;

    return {
      qty
    };
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

  render() {
    const qty = this.props.qty;
    const resultMsg = qty === 1 ?
      `${qty} resultado para` : `${qty} resultados`;
    const icon = {
      svg: this.props.grid ? gridIcon : listIcon,
      img: this.props.grid ? gridImg : listImg
    };

    return (
      <nav className="SearchHeader">
        <div className="SearchHeader__container container-fluid clearfix">
          <div className="SearchHeader__content clearfix">
            <h1 className="SearchHeader__title">
              { this.props.searchTerm }
            </h1>
            <span className="SearchHeader__results">
              { resultMsg }
            </span>
          </div>
          <div className="SearchHeader__buttons">
            <div className="SearchHeader__filter-button hidden-md hidden-lg">
              <Placeholder
                id="filter-button"
                openFilterPanel={this.toggleFilterPanel(true)}
              />
            </div>
            <div className="SearchHeader__grid-button" onTouchTap={this.handleGridTap}>
              <SVGIcon
                className="SearchHeader__icon"
                svg={icon.svg}
                fallback={icon.img}
                height={20}
                cleanupExceptions={['width', 'height']}
                fill="#777777"
              />
            </div>
          </div>
          <div>
            <Placeholder
              id="filter-panel"
              location={this.props.location}
              isOpen={this.state.isFilterPanelOpen}
              closeFilterPanel={this.toggleFilterPanel(false)}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default SearchHeader;

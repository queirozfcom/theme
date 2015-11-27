import React from 'react';
import { Area } from 'sdk';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './CategoryHeader.less';
import ExplorerButton from './ExplorerButton/ExplorerButton';
import ExplorerPanel from './ExplorerPanel/ExplorerPanel';
import SVGIcon from 'utils/SVGIcon';
import listIcon from 'assets/icons/list_icon.svg';
import listImg from 'assets/icons/list_icon.png';
import gridIcon from 'assets/icons/grid_icon.svg';
import gridImg from 'assets/icons/grid_icon.png';

class CategoryHeader extends React.Component {
  state = {
    isFilterPanelOpen: false,
    isExplorerPanelOpen: false
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
    let explorerButton = null;
    let explorerPanel = null;
    const icon = {
      svg: this.props.grid ? listIcon : gridIcon,
      img: this.props.grid ? listImg : gridImg
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
      <nav className="ProductHeader container">
        <div className="header-container">
          <div className="row header-content">
            <div className="categoryTitle">
              <h1 className="header-title">
                { this.props.category.get('name') }
              </h1>

              { explorerButton }
            </div>
            <div className="col-xs-12">
              <span className="header-results">
                { this.props.category.get('productQuantity') } Resultados
              </span>
            </div>
          </div>
          <div className="row">
            <div className="header-buttons">
              <div className="gridButton" onTouchTap={this.handleGridTap}>
                <SVGIcon
                  className="icon"
                  svg={icon.svg}
                  fallback={icon.img}
                  width={18}
                  cleanupExceptions={['width', 'height']}
                  fill="#777777"
                />
              </div>
              <Area
                id="category/filter-button"
                openFilterPanel={this.toggleFilterPanel(true)}
              />
            </div>
          </div>
          <div>
            <Area
              id="category/filter-panel"
              location={this.props.location}
              isOpen={this.state.isFilterPanelOpen}
              closeFilterPanel={this.toggleFilterPanel(false)}
              skipPageRender={this.props.skipPageRender}
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

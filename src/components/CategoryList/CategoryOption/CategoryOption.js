import React from 'react';
import { stores, history } from 'sdk';
import './CategoryOption.less';
import frontArrowIcon from 'assets/icons/frontArrow_icon.svg';
import frontArrowImg from 'assets/icons/frontArrow_icon.png';

const SVGIcon = stores.ComponentStore.state.getIn(['SVGIcon@pilateslovers.pilateslovers-theme', 'constructor']);

class CategoryOption extends React.Component {
  handleTouchTap = () => {
    this.props.closeExplorerPanel();
    history.pushState(null, this.props.slug, { pageSize: 10 });
  }

  render() {
    return (
      <li className="CategoryOption" onClick={this.handleTouchTap}>
        <button className="CategoryOption__button">
          <span className="CategoryOption__label">
            { this.props.name }
          </span>
          <SVGIcon
            className="CategoryOption__icon"
            svg={frontArrowIcon}
            fallback={frontArrowImg}
            width={15}
            cleanupExceptions={['width', 'height']}
            fill='#5C6F7F'
          />
        </button>
      </li>
    );
  }
}

export default CategoryOption;

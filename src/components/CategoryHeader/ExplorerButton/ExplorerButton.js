import React from 'react';
import './ExplorerButton.less';
import { stores } from 'sdk';
import downArrowIcon from 'assets/icons/down-arrow_icon.svg';
import downArrowImg from 'assets/icons/down-arrow_icon.png';

const SVGIcon = stores.ComponentStore.state.getIn(['SVGIcon@pilateslovers.pilateslovers-theme', 'constructor']);

class ExplorerButton extends React.Component {
  handleTouchTap = () => {
    this.props.openExplorerPanel();
  }

  render() {
    return (
      <button className="ExplorerButton" onClick={this.handleTouchTap}>
        <SVGIcon
          className="ExplorerButton__icon"
          svg={downArrowIcon}
          fallback={downArrowImg}
          width={18}
          cleanupExceptions={['width', 'height']}
          fill='#777777'
        />
      </button>
    );
  }
}

export default ExplorerButton;

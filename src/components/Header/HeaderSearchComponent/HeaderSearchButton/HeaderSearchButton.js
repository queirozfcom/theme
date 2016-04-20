import React from 'react';
import { stores } from 'sdk';
import searchIcon from 'assets/icons/search.svg';
import './HeaderSearchButton.less';

const SVGIcon = stores.ComponentStore.getState().getIn(['SVGIcon@pilateslovers.pilateslovers-theme', 'constructor']);

class HeaderSearchButton extends React.Component {

  render() {
    return (
      <button className="HeaderSearchButton pull-right" onClick={this.props.handleSearchClick}>
        <div classsName="HeaderSearchButton__inner clearfix">
          <SVGIcon className="HeaderSearchButton__svg" svg={searchIcon} width={15} height={18}/>
        </div>
      </button>
    );
  }
}

export default HeaderSearchButton;

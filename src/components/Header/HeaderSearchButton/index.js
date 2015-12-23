import React from 'react';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import searchIcon from 'assets/icons/search.svg';

class HeaderSearchButton extends React.Component {

  render() {
    return (
      <button className="HeaderSearchButton col-xs-2 col-sm-2 col-md-2 col-lg-2 col-sm-push-6 col-md-push-6 col-lg-push-6" onTouchTap={this.props.handleSearchTap}>
        <SVGIcon className="HeaderSearchButton__svg" svg={searchIcon} width={15} height={18}/>
      </button>
    );
  }
}

export default HeaderSearchButton;

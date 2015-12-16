import React from 'react';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import searchIcon from 'assets/icons/search.svg';

class HeaderSearch extends React.Component {

  render() {
    return (
      <button className="HeaderSearch col-xs-2 col-sm-1 col-md-1 col-lg-1" onTouchTap={this.props.handleSearchTap}>
        <div className="HeaderSearch__button clearfix">
          <SVGIcon className="HeaderSearch__svg" svg={searchIcon} width={15} height={18} fill="#153243"/>
        </div>
      </button>
    );
  }
}

export default HeaderSearch;

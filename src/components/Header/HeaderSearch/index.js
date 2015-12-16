import React from 'react';
import './style.less';
import SVGIcon from 'utils/SVGIcon';
import searchIcon from 'assets/icons/search.svg';

class HeaderSearch extends React.Component {

  render() {
    return (
      <div className="HeaderSearch col-sm-1 col-md-1 col-lg-1">
        <div className="HeaderSearch__inner">
          <SVGIcon className="HeaderSearch__svg" svg={searchIcon} width={15} height={18} fill="#153243"/>          
        </div>
      </div>
    );
  }
}

export default HeaderSearch;

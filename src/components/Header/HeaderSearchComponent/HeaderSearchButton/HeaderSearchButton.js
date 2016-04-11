import React from 'react';
import SVGIcon from 'utils/SVGIcon';
import searchIcon from 'assets/icons/search.svg';
import './HeaderSearchButton.less';

class HeaderSearchButton extends React.Component {

  render() {
    return (
      <button className="HeaderSearchButton pull-right" onClick={this.props.handleSearchTap}>
        <div classsName="HeaderSearchButton__inner clearfix">
          <SVGIcon className="HeaderSearchButton__svg" svg={searchIcon} width={15} height={18}/>
        </div>
      </button>
    );
  }
}

export default HeaderSearchButton;

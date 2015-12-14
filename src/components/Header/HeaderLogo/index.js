import React from 'react';
import { Link } from 'react-router';
import './style.less';
//import SVGIcon from 'utils/SVGIcon';
//import facebookIcon from 'assets/icons/store_logo.svg';
//import facebookImg from 'assets/icons/store_logo.png';

class HeaderLogo extends React.Component {

  render() {

    //let logoImage = true;

    return (
      <div className="HeaderLogo col-xs-7 col-sm-10 col-md-10 col-lg-10">
        <h1 className="HeaderLogo__font">
          <Link to="/">Modally</Link>
        </h1>
      </div>

    );
  }
}

export default HeaderLogo;

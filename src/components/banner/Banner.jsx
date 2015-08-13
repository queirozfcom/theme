import React from 'react';
import style from 'styles/components/banner/Banner.less'; // eslint-disable-line

class Banner extends React.Component {
  render() {
    return (
      <div className="banner row-fluid">
        <img className="banner-image" src="http://i.imgur.com/7ou79ca.png" />
      </div>
    );
  }
}

export default Banner;

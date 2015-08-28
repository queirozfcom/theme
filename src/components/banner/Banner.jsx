import React from 'react';
import { dispatcher, editable } from 'sdk';
import style from 'styles/components/banner/Banner.less'; // eslint-disable-line
import BannerImage from './BannerImage';

@editable(dispatcher)
class Banner extends React.Component {
  static storefront = {
    name: 'Banner@vtex.storefront-theme',
    title: 'Banner'
  }

  render() {
    let imageUrl, link, altText;
    if (this.props.settings) {
      imageUrl = this.props.settings.get('imageUrl');
      link = this.props.settings.get('link');
      altText = this.props.settings.get('altText');
    }

    return (
      <div className="v-banner banner">
        <BannerImage imageUrl={imageUrl} link={link} altText={altText}/>
      </div>
    );
  }
}

export default Banner;

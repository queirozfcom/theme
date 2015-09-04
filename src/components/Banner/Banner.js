import React from 'react';
import { register } from 'sdk';
import './Banner.less';
import BannerImage from './BannerImage';
import 'react-proxy?name=editors/BannerEditor!./editor/BannerEditor';

@register({
  id: 'Banner@vtex.storefront-theme',
  title: 'Banner',
  editable: true
})
class Banner extends React.Component {
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

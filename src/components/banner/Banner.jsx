import React from 'react';
import { dispatcher, connectToStores, editable } from 'sdk';
import style from 'styles/components/banner/Banner.less'; // eslint-disable-line
import BannerImage from './BannerImage';

@connectToStores([
  dispatcher.stores.SettingsStore,
  dispatcher.stores.ComponentStore,
  dispatcher.stores.EditorStore
])
class Banner extends React.Component {

  @editable
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

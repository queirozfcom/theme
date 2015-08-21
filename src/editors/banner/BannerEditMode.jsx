import React from 'react';
import { dispatcher, connectToStores } from 'sdk';
import 'styles/components/banner/BannerEditMode.less';
import BannerImage from 'components/banner/BannerImage';
import BannerPlaceholder from 'editors/banner/BannerPlaceholder';

@connectToStores([
  dispatcher.stores.SettingsStore
])
class BannerEditMode extends React.Component {
  handleOpenEditor = () => {
    dispatcher.actions.EditorActions.openEditor({
      component: 'BannerEditor',
      route: this.props.route,
      id: this.props.id
    });
  }

  onTouchBannerLink = (e) => {
    e.preventDefault();
  }

  render() {
    let content;
    if (this.props.settings) {
      let imageUrl = this.props.settings.get('imageUrl');
      let link = this.props.settings.get('link');
      let altText = this.props.settings.get('altText');

      content = <BannerImage imageUrl={imageUrl} link={link} altText={altText} onTouchBannerLink={this.onTouchBannerLink}/>;
    } else {
      content = <BannerPlaceholder/>;
    }

    return (
      <div className="v-banner-ed__container" onTouchTap={this.handleOpenEditor.bind(this)}>
        <span className="v-banner-ed__component-name">Banner</span>
        {content}
      </div>
    );
  }
}

export default BannerEditMode;

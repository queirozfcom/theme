import React from 'react';
import { dispatcher, connectToStores } from 'sdk';
import { State } from 'react-router';
import Banner from 'components/banner/Banner';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Newsletter from 'components/newsletter/Newsletter';
import Policies from 'components/policies/Policies';
import Shelf from 'components/shelf/Shelf';
import 'styles/pages/HomePage.less';

@connectToStores([
  dispatcher.stores.SettingsStore,
  dispatcher.stores.SearchStore,
  dispatcher.stores.ShopStore
])
class HomePage extends React.Component {
  static contextTypes = State.contextTypes

  componentWillMount() {
    if (!dispatcher.stores.ResourceStore.getResources('home')) {
      dispatcher.actions.ResourceActions.getRouteResources('home');
    }
  }

  render() {
    const SettingsStore = this.props.SettingsStore;
    let bannerSettings = SettingsStore.getIn(['home', 'home-banner', 'settings']);
    bannerSettings = bannerSettings ? bannerSettings.toJS() : bannerSettings;
    let shelf1Settings = SettingsStore.getIn(['home', 'home-shelf-1', 'settings']);
    shelf1Settings = shelf1Settings ? shelf1Settings.toJS() : shelf1Settings;
    let shelf2Settings = SettingsStore.getIn(['home', 'home-shelf-2', 'settings']);
    shelf2Settings = shelf2Settings ? shelf2Settings.toJS() : shelf2Settings;

    return (
      <div>
        <Header/>
        <Banner {...bannerSettings}/>
        <Shelf {...shelf1Settings} id="home-shelf-1" route="home"/>
        <Shelf {...shelf2Settings} id="home-shelf-2" route="home"/>
        <Policies/>
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;

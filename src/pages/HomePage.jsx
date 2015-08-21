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
  dispatcher.stores.EditorStore
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
    let shelf1Settings = SettingsStore.getIn(['home', 'home-shelf-1', 'settings']);
    let shelf2Settings = SettingsStore.getIn(['home', 'home-shelf-2', 'settings']);

    return (
      <div>
        <Header/>
        <Banner id="home-banner" route="home" settings={bannerSettings} EditorStore={this.props.EditorStore}/>
        <Shelf id="home-shelf-1" route="home" settings={shelf1Settings} EditorStore={this.props.EditorStore}/>
        <Shelf id="home-shelf-2" route="home" settings={shelf2Settings} EditorStore={this.props.EditorStore}/>
        <Policies/>
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;

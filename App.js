/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Dimensions} from 'react-native';
//import ScrollableTabView from 'react-native-scrollable-tab-view';
//var ScrollableTabView = require('react-native-scrollable-tab-view');
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import Sample from './sample';
import FirstRoute from './first';

//const FirstRoute = () => (
//  <View style={[styles.container, { backgroundColor: '#ff4081' }]}>
//		<TEXT>{this.props.name}</TEXT>
//  <View>
//);

const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);

type Props = {};
export default class App extends Component<Props> {

  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'First' },
      { key: 'second', title: 'Second' },
      { key: 'third', title: 'Third' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        //renderScene={SceneMap({
        //  first: FirstRoute,
        //  second: SecondRoute,
        //  third: Sample,
        //})}
				renderScene = {({ route }) => {
					switch (route.key) {
						case 'first':
							return <FirstRoute name='Nice job' />;
						case 'second':
							return <SecondRoute />;
						case 'third':
							return <Sample />;
						default:
							return null;
					}
				}}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

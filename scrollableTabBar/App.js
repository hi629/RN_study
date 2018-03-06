import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import FirstRoute from './FirstRoute';
import { Container, Content, Header, Body, Icon } from 'native-base';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#fff' } ]} />;
const ThirdRoute1 = () => <View style={[ styles.container, { backgroundColor: '#fff' } ]} />;
const ThirdRoute2 = () => <View style={[ styles.container, { backgroundColor: '#fff' } ]} />;
const ThirdRoute3 = () => <View style={[ styles.container, { backgroundColor: '#fff' } ]} />;
const ThirdRoute4 = () => <View style={[ styles.container, { backgroundColor: '#fff' } ]} />;
const ThirdRoute5 = () => <View style={[ styles.container, { backgroundColor: '#fff' } ]} />;
const ThirdRoute6 = () => <View style={[ styles.container, { backgroundColor: '#fff' } ]} />;
const ThirdRoute7 = () => <View style={[ styles.container, { backgroundColor: '#fff' } ]} />;
const ThirdRoute8 = () => <View style={[ styles.container, { backgroundColor: '#fff' } ]} />;

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: '最初' },
      { key: 'second', title: 'Second' },
      { key: 'third', title: 'Third' },
      { key: 'third1', title: 'Third1' },
      { key: 'third2', title: 'Third2' },
      { key: 'third3', title: 'Third3' },
      { key: 'third4', title: 'Third4' },
      { key: 'third5', title: 'Third5' },
      { key: 'third6', title: 'Third6' },
      { key: 'third7', title: 'Third7' },
      { key: 'third8', title: 'Third8' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });


//   _renderScene = SceneMap({
//     first: FirstRoute,
//     second: SecondRoute,
// 	   third: ThirdRoute,
//   });

  _renderScene = ({ route }) => {
    if (Math.abs(this.state.index - this.state.routes.indexOf(route)) > 2) {
        return null;
      }else{
        switch (route.key) {
            case 'first':
              return (
                <FirstRoute />
              );
            case 'second':
              return(
                <SecondRoute />
              );
              case 'Third':
              return(
                <ThirdRoute />
              );
              case 'Third1':
              return(
                <ThirdRoute1 />
              );
              case 'Third2':
              return(
                <ThirdRoute2 />
              );
              case 'Third3':
              return(
                <ThirdRoute3 />
              );
              case 'Third4':
              return(
                <ThirdRoute4 />
              );
              case 'Third5':
              return(
                <ThirdRoute5 />
              );
              case 'Third6':
              return(
                <ThirdRoute6 />
              );
              case 'Third7':
              return(
                <ThirdRoute7 />
              );
              case 'Third8':
              return(
                <ThirdRoute8 />
              );
            default:
              return null;
        }
      }
  }

  _renderHeader = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  render() {
    return (
        <Container>
            <Text>test</Text>
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
                useNativeDriver
            />
            <Text>ここにナビゲーションがくる</Text>
        </Container>

    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabbar: {
      backgroundColor: '#3f51b5',
    },
    tab: {
      width: 100,
    },
    indicator: {
      backgroundColor: '#ffeb3b',
    },
    label: {
      color: '#fff',
      fontWeight: '400',
    },
  });
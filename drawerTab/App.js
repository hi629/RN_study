import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import HomeScreen from "./HomeScreen";
import SettingsScreen from './SettingsScreen';

import { Container, Content, Header, Body, Icon } from 'native-base';

class App extends React.Component {
  render() {
    return (
      <MyApp />
    );
  }
}

const CustomDrawerContentComponent = (props)=>(
  <Container>
    <Header style={{height:200, backgroundColor:'white'}}>
      <Body>
        <Image
        style={styles.drawerImage}
        source={require('./twitter.jpg')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
)

const MyApp = DrawerNavigator({
  Home:{
    screen: HomeScreen
  },
  Setting:{
    screen: SettingsScreen
  }
},{
  initialRouteName:'Home',
  contentComponent:CustomDrawerContentComponent,
  drawerOpenRoute:'DrawerOpen',
  drawerClose:'DrawerClose',
  drawerToggleRoute:'DrawerToggle'
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerImage: {
    height:150,
    width:150,
    borderRadius:75
  }
});

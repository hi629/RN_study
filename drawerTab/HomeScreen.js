import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

import { Icon, Button, Container, Header, Content, Left } from 'native-base';

class HomeScreen extends Component {
  
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="ios-menu" onPress={()=>
              this.props.navigation.navigate('DrawerOpen')} />
          </Left>
        </Header>
        <Content contentContainerStyle={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Text>tetete</Text>
        </Content>

      </Container>

    )
  }
}

export default HomeScreen;


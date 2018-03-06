import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title, Spinner } from 'native-base';
import firebase from 'firebase';
import LoginFrom from './src/components/common/loginForm';

export default class App extends React.Component {
  //ユーザーがログインしているか否かの判別初期値
  state = { loggedIn: null }
  componentWillMount(){
    firebase.initializeApp({
      //ここにfirebaseの情報を入れる
    });

    //ユーザーがログインしているか否かの判別
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn:true})
      }else{
        this.setState({loggedIn:false})
      }
    });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return(
          <Button block onPress={()=>firebase.auth().signOut()} >
            <Text>Logout</Text>
          </Button>
        )
      case false:
        return <LoginFrom /> 
      default:
       return <Spinner />
    }
  }
  render() {
    return (
      <Container>
        <Header><Body><Title>Header</Title></Body></Header>
        {this.renderContent()}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

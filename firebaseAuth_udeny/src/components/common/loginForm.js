import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, CardItem, Content, Container, Form, Item,Input, Left, Body, Button, Icon, Spinner } from 'native-base';

import firebase from 'firebase';

class LoginForm extends Component{
    state={
        email:"",
        password:"",
        error:"",
        loading:false
    }

    onButtonPress(){
        const { email, password } = this.state;
        this.setState({error:"", loading:true});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this))
        })
    }

    onLoginSuccess(){
        this.setState({
            email:"",
            password:"",
            error:"",
            loading:false
        })
    }

    onLoginFail(){
        this.setState({error:"認証に失敗しました", loading:false})
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner />;
        }else{
            return(
                <Button block onPress={this.onButtonPress.bind(this)} >
                    <Text>ログイン</Text>
                </Button>
            )
        }
    }

    render(){
        return(
            <Container>
            <Content>
                <Card>
                    <Form>
                        <Item>
                            <Input 
                            placeholder="メール"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={this.state.email}
                            onChangeText={text => this.setState({ email:text })}
                             />
                        </Item>
                        <Item last>
                            <Input 
                            placeholder="Password" 
                            autoCorrect={false}
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={pasText => this.setState({ password:pasText })}
                            />
                        </Item>
                    </Form>
                    <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                    {this.renderButton()}
                </Card>
            </Content>
            </Container>
        )
    }
}

export default LoginForm;

const styles = StyleSheet.create({
    errorTextStyle:{
        fontSize:20,
        alignSelf:"center",
        color:"red"
    }
})
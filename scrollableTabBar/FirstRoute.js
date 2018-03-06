import React, {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Container, Content, Header, Body, Icon } from 'native-base';
export default class FirstRoute extends Component{
    render(){
        return(
            <Container style={[ styles.container, { backgroundColor: '#ff4081' } ]}>
                <Text>わーいわーい</Text>
                <Text>わーいわーい</Text>
                <Text>わーいわーい</Text>
                <Text>わーいわーい</Text>
                <Text>わーいわーい</Text>
                <Text>わーいわーい</Text>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
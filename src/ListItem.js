import React, { Component } from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { Card, CardItem, Container, Content, Header, Body, Icon } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../src/actions';

class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring()
    }
    renderDescription(){
        // if(this.props.librarydayo.id === this.props.selectedLibraryId){
        //     return(
        //         <Text>{this.props.librarydayo.description}</Text>
        //     )
        // }
        if(expanded_dayo){
            return(
                <CardItem>
                    <Text style={{flex:1}} >{this.props.librarydayo.description}</Text>
                </CardItem>
            )
        }
    }
    render(){
        const { id, title } = this.props.librarydayo;

        return(
            <TouchableWithoutFeedback
                onPress={()=>this.props.selectedLibrary(id)}
            >
                <View>
                    <CardItem>
                        <Text style={titleStyle}>{title}</Text>
                    </CardItem>
                    {this.renderDescription}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        paddingLeft:15
    }
})

//stateを引数として返すが、第２引数としてこのcomponentのpropsも返す
const mapStateToProps = (state, ownProps) =>{
    const expanded = state.selectedLibraryId === ownProps.librarydayo.id;

    return { expanded_dayo:expanded }
}

export default connect(mapStateToProps,actions)(ListItem);

// export default connect(null,actions)(ListItem);
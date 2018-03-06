import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers/index';

import { Container, Header, Content, Spinner } from 'native-base';
import LibraryList from './src/LibraryList';

const App = () =>{
    return(
        <Provider store={createStore(reducers)}>
        <View style={{flex:1}}>
            <Header>
                <Text>ggg</Text>
            </Header>
            <LibraryList />
        </View>
        </Provider>
    )
};

export default App;
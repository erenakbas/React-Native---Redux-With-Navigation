import React, { Component } from 'react';
import { Text, View,StyleSheet,TextInput } from 'react-native'; 

import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View style={{flex:1}}>
          <SearchBar
        placeholder="Kitap adı veya yazar"
        inputContainerStyle={{backgroundColor:'white'}}
        onChangeText={this.updateSearch}
        value={search}
      />
      </View>
      
    );
  }
}
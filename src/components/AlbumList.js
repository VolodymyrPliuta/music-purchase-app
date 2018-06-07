import React, { Component } from 'react';
import { View, Text } from 'react-native';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    console.log('gfkl');
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => this.setState({ albums: json}));
  }

  render() {
    console.log(this.state)
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>Album List!!!!</Text>
      </View>
    );
  }
}

const styles = {
      viewStyle: {
          backgroundColor: '#5fdaa4',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 20,
          height: 60,
          width: 350,
          shadowColor: '#585858',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          elevation: 2,
          position: 'relative'
      },
  textStyle: {
    fontSize: 20,
    color: '#fff',
  }
};

export default AlbumList;

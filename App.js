import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Yoooooo! Mike dude! We are in teh game!</Text>
        <Text>Yo! Mike dude! We are in the game!</Text>
        <Text>We are in the game</Text>
        <Text style={{color: 'white'}}>Each game. We are in the game</Text>
        <Header></Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

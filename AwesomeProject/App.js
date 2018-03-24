import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <View>
        <Text >Hello world!</Text>
        <Image 
          source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
          }}
          style={{width: 193, height: 110}}/>
      </View>  
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

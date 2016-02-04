/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Game from './Game.js';

var backgroundImage = 'https://dl.dropboxusercontent.com/s/quaxsr8vn3hdi9e/background.jpg?dl=0';

class WheresWallEMobile extends Component {
  render() {
    return (
      <Image
        source={{uri: backgroundImage}}
        resizeMode='cover'
        style={styles.backdrop} >
        <View style={styles.container}>
          <Game />
        </View>
      </Image>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
  },
});

AppRegistry.registerComponent('WheresWallEMobile', () => WheresWallEMobile);

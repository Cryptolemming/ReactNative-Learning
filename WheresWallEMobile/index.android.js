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
const CARDS = ['k3xkgdci3h9mlnf/walle.jpg?dl=0', 'k3xkgdci3h9mlnf/walle.jpg?dl=0', '1ll4rd0q28y7is8/eve.jpg?dl=0', '7sbiokkeq2hnaze/john.jpg?dl=0', '93ltebnju2vd5ns/captain2.jpg?dl=0', 'uho6nbflui260ca/mary.jpg?dl=0'];

class WheresWallEMobile extends Component {
  render() {
    return (
      <Image
        source={{uri: backgroundImage}}
        resizeMode='cover'
        style={styles.backdrop} >
        <View style={styles.container}>
          <Game images={CARDS} />
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

import Game from './Game.js';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

'use strict';

var backgroundImage = 'https://dl.dropboxusercontent.com/s/quaxsr8vn3hdi9e/background.jpg?dl=0';
const CARDS = ['k3xkgdci3h9mlnf/walle.jpg?dl=0', 'epmgt0g9on02unj/walle2.jpg?dl=0', '1ll4rd0q28y7is8/eve.jpg?dl=0', '7sbiokkeq2hnaze/john.jpg?dl=0', '93ltebnju2vd5ns/captain2.jpg?dl=0', 'uho6nbflui260ca/mary.jpg?dl=0'];

class WheresWallEMobile extends Component {
  render() {
    return (
      <Game images={CARDS} />
    );
  }
};

const styles = StyleSheet.create({

  },
});

AppRegistry.registerComponent('WheresWallEMobile', () => WheresWallEMobile);

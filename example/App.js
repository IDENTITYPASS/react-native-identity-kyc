/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {
  TouchableOpacity,
  PermissionsAndroid,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import IdentityKyc from 'react-native-identity-kyc';

export default class App extends Component {
  state = {
    status: 'starting',
    message: '--',
  };

  render() {
    return (
      <IdentityKyc
        containerStyle={styles.container}
        loaderColor={'red'}
        buttonText={'Verify'}
        showDefaultButton={true}
        merchant_key="your public key" //text key
        first_name="kayode"
        isTest={false}
        userRef="12345643"
        last_name="olayiwola"
        email="olayiuwolakayode07@gmail.com"
        onCancel={data => {
          console.log(data);
        }}
        onError={data => {
          console.log(data);
        }}
        customButton={onPress => (
          <TouchableOpacity onPress={onPress} style={styles.verifyBtn}>
            <Text style={styles.verifyText}>Verify My Identity</Text>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  verifyBtn: {
    backgroundColor: '#a7038b',
    padding: 20,
    borderRadius: 20,
  },
  verifyText: {
    color: 'white',
  },
});

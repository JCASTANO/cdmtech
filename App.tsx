import React from 'react';
import { StyleSheet, Text, ToastAndroid } from 'react-native';
import { WebView } from 'react-native-webview';
import { BackHandler } from 'react-native'

export default class Welcome extends React.Component {
  render() {
    return <React.Fragment>

    <Text style={{marginTop:20}}></Text>

    <WebView
      source={{ uri: 'https://www.cdmtech.co/' }}
      style={{ marginTop: 20 }}
    />
    </React.Fragment> }

    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
      return true;
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

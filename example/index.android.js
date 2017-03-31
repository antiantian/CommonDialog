/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DialogDemo from './dialogDemo';
export default class AwesomeProject extends Component{
    render(){
      return (
	    <View style={styles.container}>
		   <DialogDemo/>
		</View>   
      );
    }

 };

 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
 });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
    KeyboardAvoidingView,ToastAndroid} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';



export default class Lawyer extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Header> Lawyer! </Header>
      <Text style={styles.subheading}> 
      Northwestern University
      </Text>
      <Text style={styles.text} > Northwestern University is located in Evanston, IL. It has an average admissions rate of 9%, and the tuition is on averae 25K after aid. Some famous alumni are David Schwimmer and Seth Meyers. </Text>

      <Text style={styles.subheading}> University of California, Berkley </Text>
      <Text style={styles.text} > The University of California, Berkley is located in Berkley, CA. The admissions rate is 17%, and the average tuition after aid is 15K. Some famous alumni include Steve Wozniak and Chris Pine </Text>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B7096',
  },
  subheading:{
    marginTop: 20,
    marginLeft: 30,
    fontSize: 30,
    fontFamily: "Courier New",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    marginLeft: 30,
    marginRight: 30,
    color: "#FFFFFF",
    fontFamily: "Courier New",
  }
})
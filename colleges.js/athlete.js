import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
    KeyboardAvoidingView,ToastAndroid} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';



export default class Athlete extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Header style={styles.header}> Athlete! </Header>
           <
           Text style={styles.subheading}> 
      Stanford Univeristy!
      </Text> 
      <Text style={styles.text}>  Stanford Univeristy is a great college! It is located in Standford, CA Some of its alumni being Sally Ride and Larry Page! The admissions rate is 5.2%. The tutition is $74,570 (for four years of college) as of 2019 </Text>

      <Text style={styles.subheading}> Duke University </Text>
      <Text style={styles.text}> Duke Univeristy is located in Durhan, North Carolina. Some famous alumni are Christian Laettner and Carlos Boozer! The admissions rate is 7.7%. The tutition is roughly 60,594 as of 2021. </Text>
      
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
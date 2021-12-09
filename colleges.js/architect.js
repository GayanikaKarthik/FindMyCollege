import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
    KeyboardAvoidingView,ToastAndroid} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';



export default class Architect extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Header> Architect! </Header>
      <Text style={styles.subheading}> 
      Cornell University
      </Text>
      <Text style={styles.text} > Here's one of the choices for Architecture! Cornell Univeristy is a great college fr architecture, some of its alumni being Adepero Oduye and even Bill Nye! The admissions rate is under 9 percent, and tutiton is $76,258 (for four years of college) as of 2019.  </Text>

      <Text style={styles.subheading}> Massachusetts Institute of Technology </Text>
      <Text style={styles.text} > So you might go to MIT! Wow! MIT is a great college for anything S.T.E.M. related! It is located Cambridge, MA. Some famous alumni are Buzz Aldarin and Amar Boze! The admissions rate is 7.3%. The tutition is 73,160 (for four years of college) as of 2020.  </Text>
      
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
    marginRight: 10,
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
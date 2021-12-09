import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
    KeyboardAvoidingView,ToastAndroid} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';



export default class Politican extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Header> Politician! </Header>
      <Text style={styles.subheading}> 
      Cornell University
      </Text>
      <Text style={styles.text} > Harvard University, located in Cambridge, MA, is one of the most well-known colleges. It's admissions rate is at 5%, and the average tuition is 15K after aid. Some famous alumni are John F. Kennedy, Mark Zuckerberg, Theodore Roosevelt, and George W. Bush. </Text>

      <Text style={styles.subheading}> Columbia University </Text>
      <Text style={styles.text} > Columbia University is a great school for political science. It's located in New York, NY. It has an addmissions rate of 7%, and a tuition of 23K  on average after aid. Some well-known alumni are Amelia Earhart and Barak Obama. </Text>
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
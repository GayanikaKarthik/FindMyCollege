import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
    KeyboardAvoidingView,ToastAndroid} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';



export default class Doctor extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Header> Doctor! </Header>
      <Text style={styles.subheading}> 
      Perelman School of Medicine
      </Text>
      <Text style={styles.text}> Perelman School of Medicine is a private art school located in Philadelphia, Pennsylvania. Some alumni that you might have heard of are Dr. Richard Besser and Mehmet Oz! Their admission rate are 4%. The tuition is on average $59,910. </Text>

      <Text style={styles.subheading}> University of California, San Francisco </Text>
      <Text style={styles.text}> University of California, San Francisco is located in San Francisco, CA. Some alumni of this university are Carolyn R. Bertozzi and David Baker. The admission rate is 64.6%.  The average tution is $14,312 in-state.  </Text>
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
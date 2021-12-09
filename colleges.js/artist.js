import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
    KeyboardAvoidingView,ToastAndroid} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';



export default class Artist extends React.Component{
  render(){
    return(
      <View style={styles.container}>
      <Header> Artist! </Header>
      <Text style={styles.subheading}> 
      Rhose Island School of Design
      </Text>
      <Text style={styles.text}> The Rhode Island School of Design is a private art school located in Providence, Rhode Island. Some alumni that you might have heard of are Dale Chihuly and Gus Van Sant! Their admission rate are 27.1%. The tution is $236,086 as of the 2020/2021 school year. </Text>

      <Text style={styles.subheading}> School of the Art Institute of Chicago </Text>
      <Text style={styles.text}> The School of the Art Institute of Chicago is another private university located in Chicago, Illonois. Some alumni of this university are  Georgia O'Keeffe and Archibald Motley. It's admission rate is 77.8%.  The average tution is $49,980 as of the 2019/2020 school year. </Text>
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
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
} from "react-native";

export default class WelcomeScreen extends Component {

  render(){
    return(
  <View style={styles.container}> 

  <TouchableOpacity style={styles.welcomeButton} 
 onPress={() => this.props.navigation.navigate("SurveyScreen")}
  
  > 
  <Text style={styles.titleText}> Find My College </Text> 
  </TouchableOpacity>

    <Text style={styles.informationText}>  Deciding what college to apply to an enroll is incrediby difficult. With around 4000 alone in the USA, it's hard to decide which choice might be the best for you. Because of the intense number of colleges available, we'll be shortening the list down to top colleges in the US. Some you may have heard of, others are a little less unknown. We'll give you 2 colleges from your chosen proffession, and some basic information. Ready? Find my College! </Text>
  
  </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B7096',
  },
  titleText:{
    margin: 20,
    marginLeft: 40,
    fontSize: 50,
    fontFamily: "Courier New",
    alignItems: "center",
    justifyContent: "center"
  }, 
  welcomeButton: {
     alignItems: "center",
     justifyContent: "center",
     backgroundColor: "#8FCAF4",
     margin: 20,
     shadowOpacity: "40%",
  },
  informationText: {
    marginLeft: 30,
    marginRight: 30,
    color: "#FFFFFF",
    fontFamily: "Courier New",
    fontSize: 20
  }
})
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';

export default class SurveyScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
      <TouchableOpacity style={styles.choicesBox}
      onPress={() => this.props.navigation.navigate("Doctor")}
      > 
      <Text style={styles.text}> If you want to be a Doctor... </Text> 
      </TouchableOpacity>

            <TouchableOpacity style={styles.choicesBox}
            onPress={() => this.props.navigation.navigate("Artist")}
            > 
      <Text style={styles.text}> If you want to be an Artist/Musician/Actor... </Text> 
      </TouchableOpacity>

            <TouchableOpacity style={styles.choicesBox}
            onPress={() => this.props.navigation.navigate("Engineer")}
            > 
      <Text style={styles.text}> If you want to be an Software Engineer... </Text> 
      </TouchableOpacity>

            <TouchableOpacity style={styles.choicesBox}
            onPress={() => this.props.navigation.navigate("Lawyer")}
            > 
      <Text style={styles.text}> If you want to be a Lawyer... </Text> 
      </TouchableOpacity>

            <TouchableOpacity style={styles.choicesBox}  
            onPress={() => this.props.navigation.navigate("Architect")}
             > 
      <Text style={styles.text}> If you want to be an Architect ... </Text> 
      </TouchableOpacity>

            <TouchableOpacity style={styles.choicesBox}
            onPress={() => this.props.navigation.navigate("Athlete")}
            > 
      <Text style={styles.text}> If you want to be an Athlete... </Text> 
      </TouchableOpacity>

            <TouchableOpacity style={styles.choicesBox}
            onPress={() => this.props.navigation.navigate("Astronaut")}
            > 
      <Text style={styles.text}> If you want to be an Astronaut ... </Text> 
      </TouchableOpacity>

            <TouchableOpacity style={styles.choicesBox}
            onPress={() => this.props.navigation.navigate("Politician")}
            > 
      <Text style={styles.text}> If you want to be a Politician/Buisness owner ... </Text> 
      </TouchableOpacity>

       </ScrollView> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#3B7096',
  },
  choicesBox:{
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 15,
    width: 300,
    height: 65,
    backgroundColor: "#8FCAF4",
  },
  text:{
    fontSize: 20,
    marginLeft: 20,
    color: 'white',
    fontFamily: "Courier New",
  }
});


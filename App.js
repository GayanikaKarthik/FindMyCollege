import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as firebase from 'firebase';
import { firebaseConfig } from './config';

import WelcomeScreen from './screens.js/welcomeScreen';
import SurveyScreen from './screens.js/surveyScreen';

import Architect from './colleges.js/architect';
import Lawyer from './colleges.js/lawyer';
import Artist from './colleges.js/artist';
import Athlete from './colleges.js/athlete';
import Doctor from './colleges.js/doctor';
import Engineer from './colleges.js/engineer';
import Politician from './colleges.js/politician';


const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{
      headerShown: true
    }}>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
    <Stack.Screen name="SurveyScreen" component={SurveyScreen}/>
    <Stack.Screen name="Architect" component={Architect}/>
    <Stack.Screen name="Lawyer" component={Lawyer}/>
    <Stack.Screen name="Artist" component={Artist}/>
    <Stack.Screen name="Athlete" component={Athlete}/>
    <Stack.Screen name="Doctor" component={Doctor}/>
    <Stack.Screen name="Engineer" component={Engineer}/>
    <Stack.Screen name="Politician" component={Politician}/>
    </Stack.Navigator>
     </NavigationContainer>

  )
}

export default App;




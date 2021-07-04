import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePageScreen from '../../modules/components/screens/HomePageScreen';

const Stack = createStackNavigator();

class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={HomePageScreen} name={'HomePage'} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Routes;

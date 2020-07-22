import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Posts from './Posts';
import ImagePost from './ImagePost';

const Stack = createStackNavigator();

function PostForm() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Posts'
          component={Posts}
        />
        <Stack.Screen
          name='Image'
          component={ImagePost}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default PostForm;
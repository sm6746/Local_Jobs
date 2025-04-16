import React from 'react';
import { BookmarkProvider } from './src/context/BookmarkContext';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobDetailsScreen from './app/job/[id]';
import BookmarksScreen from './app/bookmarks';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <BookmarkProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Jobs" component={JobDetailsScreen} />
          <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </BookmarkProvider>
  );
}

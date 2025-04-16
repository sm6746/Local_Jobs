// app/_layout.js
import { Tabs } from 'expo-router';
import { BookmarkProvider } from '../src/context/BookmarkContext';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <BookmarkProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Jobs',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="briefcase-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmarks"
          options={{
            title: 'Bookmarks',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bookmark-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </BookmarkProvider>
  );
}

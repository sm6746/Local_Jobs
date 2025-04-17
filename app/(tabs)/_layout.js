import React from 'react';
import { Stack } from 'expo-router';
import { BookmarkProvider } from '../../src/context/BookmarkContext'; 

export default function Layout() {
  return (
    <BookmarkProvider>
      <Stack />
    </BookmarkProvider>
  );
}

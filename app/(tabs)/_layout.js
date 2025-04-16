import React from 'react';
import { Stack } from 'expo-router';
import { BookmarkProvider } from '../../src/context/BookmarkContext'; // ✅ Make sure this path is still correct

export default function Layout() {
  return (
    <BookmarkProvider>
      <Stack />
    </BookmarkProvider>
  );
}

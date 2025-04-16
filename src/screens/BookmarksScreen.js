import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useBookmarks } from '../../src/context/BookmarkContext'; // Importing the context

export default function BookmarksScreen() {
  const { bookmarks } = useBookmarks(); // Access the bookmark context

  if (bookmarks.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No Bookmarked Jobs</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={bookmarks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.title}</Text>
            <Button title="View Details" onPress={() => navigate(`/job/${item.id}`)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

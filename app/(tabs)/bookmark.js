
import { View, Text, FlatList, Button } from 'react-native';
import { useBookmarks } from '../../src/context/BookmarkContext';

export default function BookmarksScreen() {
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Bookmarked Jobs</Text>
      {bookmarks.length === 0 ? (
        <Text>No bookmarks yet!</Text>
      ) : (
        <FlatList
          data={bookmarks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
              <Button title="Remove" onPress={() => removeBookmark(item.id)} />
            </View>
          )}
        />
      )}
    </View>
  );
}

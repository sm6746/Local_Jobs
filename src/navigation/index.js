import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { fetchJobs } from '../src/api/jobsApi';
import { useRouter } from 'expo-router';
import { useBookmarks } from '../src/context/BookmarkContext';

export default function JobListScreen() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addBookmark, bookmarks, removeBookmark } = useBookmarks();
  const router = useRouter();

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data.results || []);
      } catch (error) {
        console.error('Error loading jobs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  const renderItem = ({ item }) => {
    const isBookmarked = bookmarks.some((b) => b.id === item.id);

    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={() => router.push(`/job/${item.id}`)}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.company}</Text>
        </TouchableOpacity>
        <Button
          title={isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
          onPress={() => {
            isBookmarked ? removeBookmark(item.id) : addBookmark(item);
          }}
        />
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading jobs...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={jobs}
      keyExtractor={(item, index) => item?.id?.toString() ?? index.toString()}
      renderItem={renderItem}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

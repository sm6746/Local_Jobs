import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useBookmarks } from '../../src/context/BookmarkContext'; 

export default function JobDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [job, setJob] = useState(null);
  const { bookmarks, addBookmark, removeBookmark, loading, error } = useBookmarks();

  useEffect(() => {
    
    const fetchJob = async () => {
      setJob({
        id,
        title: 'Software Engineer',
        company: 'Tech Company',
        location: 'Remote',
        description: 'Job description here...',
        salary: '$100,000',
        phone: '123-456-7890',
      });
    };
    fetchJob();
  }, [id]);

  const isBookmarked = bookmarks.some((b) => b.id === job?.id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      removeBookmark(job.id);
    } else {
      addBookmark(job);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      {job && (
        <>
          <Text style={styles.title}>{job.title}</Text>
          <Text>Company: {job.company}</Text>
          <Text>Location: {job.location}</Text>
          <Text>Salary: {job.salary}</Text>
          <Text>Description: {job.description}</Text>
          <Button title={isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'} onPress={toggleBookmark} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});

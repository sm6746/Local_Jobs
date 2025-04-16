
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useBookmarks } from '../src/context/BookmarkContext';

const JobListScreen = () => {
  const [jobs, setJobs] = useState([]);
  const { addBookmark } = useBookmarks();

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('https://your-api-url.com/jobs');
      const data = await response.json();
      setJobs(data.jobs); // adjust based on actual response structure
    };

    fetchJobs();
  }, []);

  const renderJob = ({ item }) => (
    <View style={styles.jobCard}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.company}</Text>
      <Button title="Bookmark" onPress={() => addBookmark(item)} />
    </View>
  );

  return (
    <FlatList
      data={jobs}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderJob}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: { padding: 16 },
  jobCard: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    marginBottom: 12,
    borderRadius: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default JobListScreen;
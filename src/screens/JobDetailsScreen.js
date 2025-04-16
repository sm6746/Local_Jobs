import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; // Assuming you're using expo-router
import { useBookmarks } from '../../src/context/BookmarkContext'; // Correct path to your context
import { fetchJobs } from '../../src/api/jobsApi'; // Assuming you have an API to fetch jobs

export default function JobDetailsScreen() {
  const { id } = useLocalSearchParams(); // Get the job ID from the URL params
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks(); // Accessing the context

  useEffect(() => {
    const loadJob = async () => {
      try {
        const data = await fetchJobs(); // Fetch the job data
        const selectedJob = data.results.find((j) => j.id.toString() === id.toString());
        setJob(selectedJob);
        setLoading(false);
      } catch (error) {
        console.error('Error loading job:', error);
        setLoading(false);
      }
    };

    loadJob();
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
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!job) {
    return (
      <View style={styles.center}>
        <Text>Job not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text>Company: {job.company}</Text>
      <Text>Location: {job.location}</Text>
      <Text>Salary: {job.salary}</Text>
      <Text>Description: {job.description}</Text>

      <Button title={isBookmarked ? 'Remove Bookmark' : 'Add to Bookmarks'} onPress={toggleBookmark} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


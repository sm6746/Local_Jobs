import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { fetchJobs } from '../../src/api/jobsApi';
import { useRouter } from 'expo-router';

export default function JobsScreen() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const router = useRouter();

  const loadJobs = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    try {
      const { results, hasMore: more } = await fetchJobs(page);
      setJobs((prevJobs) => [...prevJobs, ...results]);
      setPage((prev) => prev + 1);
      setHasMore(more);
    } catch (error) {
      console.error('Failed to load jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const renderJob = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push(`/job/${item.id}`)}
      style={{
        padding: 15,
        margin: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
      <Text>📍 {item.primary_details?.Place || 'N/A'}</Text>
      <Text>💰 {item.primary_details?.Salary || 'N/A'}</Text>
      <Text>📞 Not available</Text>
    </TouchableOpacity>
  );
  
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={jobs}
        keyExtractor={(item) => {
          // Check if 'id' exists and is a valid value
          if (item?.id) {
            return item.id.toString();
          }
          // Fallback if 'id' is undefined
          return `job_${Math.random().toString(36).substr(2, 9)}`; // Fallback to random string
        }}
        renderItem={renderJob}
        onEndReached={loadJobs}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isLoading ? <ActivityIndicator size="large" color="blue" /> : null}
      />
    </View>
  );
}
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function JobDetailsScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const loadJobDetails = async () => {
      try {
        const response = await fetch(`https://your-api-endpoint.com/jobs/${id}`);
        const data = await response.json();
        setJobDetails(data);
      } catch (error) {
        console.error('Error fetching job details:', error);
      }
    };

    if (id) loadJobDetails();
  }, [id]);

  if (!jobDetails) {
    return (
      <View style={styles.container}>
        <Text>Loading job details...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{jobDetails.title}</Text>
      <Text>📍 {jobDetails.primary_details?.Place || 'N/A'}</Text>
      <Text>💰 {jobDetails.primary_details?.Salary || 'N/A'}</Text>
      <Text>Experience: {jobDetails.primary_details?.Experience || 'N/A'}</Text>
      <Text>Qualification: {jobDetails.primary_details?.Qualification || 'N/A'}</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});


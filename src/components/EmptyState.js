
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EmptyState = ({ 
  icon = 'alert-circle-outline', 
  message = 'No data available', 
  subMessage = 'Try again later' 
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={64} color="#757575" />
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.subMessage}>{subMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#424242',
    marginTop: 16,
    textAlign: 'center',
  },
  subMessage: {
    fontSize: 14,
    color: '#757575',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default EmptyState;
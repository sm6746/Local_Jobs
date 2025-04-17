
import React, { useRef, useEffect } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';
import { RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomRefreshControl = ({ refreshing, onRefresh, colors = ['#2196F3'] }) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    if (refreshing) {
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    } else {
      rotateAnim.setValue(0);
    }
  }, [refreshing, rotateAnim]);
  
  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  
  return (
    <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      colors={colors}
      tintColor={colors[0]}
      titleColor={colors[0]}
      progressBackgroundColor="#fff"
      progressViewOffset={10}
      style={styles.refreshControl}
      title="Refreshing..."
    />
  );
};

const styles = StyleSheet.create({
  refreshControl: {
    backgroundColor: 'transparent',
  },
});

export default CustomRefreshControl;
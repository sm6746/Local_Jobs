
import React, { useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Animated, 
  Easing 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useBookmarks } from '../context/BookmarkContext';
import { formatSalary } from '../utils/constants';

const JobCard = ({ job, onPress, index = 0 }) => {
  const { isBookmarked, addBookmark, removeBookmark } = useBookmarks();
  const bookmarked = isBookmarked(job.id);
  
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;
  const bookmarkScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    
    const delay = index * 100;
    
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        delay,
        useNativeDriver: true,
        easing: Easing.out(Easing.quad),
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 300,
        delay,
        useNativeDriver: true,
        easing: Easing.out(Easing.quad),
      }),
    ]).start();
  }, [fadeAnim, scaleAnim, index]);

  const handleBookmarkPress = () => {
   
    Animated.sequence([
      Animated.timing(bookmarkScale, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.out(Easing.quad),
      }),
      Animated.timing(bookmarkScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
        easing: Easing.in(Easing.quad),
      }),
    ]).start();

    if (bookmarked) {
      removeBookmark(job.id);
    } else {
      addBookmark(job);
    }
  };

  return (
    <Animated.View 
      style={[
        styles.cardContainer,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <TouchableOpacity 
        style={styles.card} 
        onPress={() => onPress(job)}
        activeOpacity={0.7}
      >
        <View style={styles.header}>
          <Text style={styles.title} numberOfLines={1}>{job.title}</Text>
          <Animated.View style={{ transform: [{ scale: bookmarkScale }] }}>
            <TouchableOpacity 
              style={styles.bookmarkButton} 
              onPress={(e) => {
                e.stopPropagation();
                handleBookmarkPress();
              }}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons 
                name={bookmarked ? 'bookmark' : 'bookmark-outline'} 
                size={24} 
                color={bookmarked ? '#2196F3' : '#757575'} 
              />
            </TouchableOpacity>
          </Animated.View>
        </View>
        
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Ionicons name="location-outline" size={16} color="#757575" />
            <Text style={styles.detailText} numberOfLines={1}>{job.location || 'Location not specified'}</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Ionicons name="cash-outline" size={16} color="#757575" />
            <Text style={styles.detailText}>{formatSalary(job.salary)}</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Ionicons name="call-outline" size={16} color="#757575" />
            <Text style={styles.detailText}>{job.phone || 'Phone not available'}</Text>
          </View>
          
          {job.company && (
            <View style={styles.detailItem}>
              <Ionicons name="business-outline" size={16} color="#757575" />
              <Text style={styles.detailText} numberOfLines={1}>{job.company}</Text>
            </View>
          )}
        </View>
        
        {job.postedDate && (
          <View style={styles.footer}>
            <Text style={styles.postedDate}>
              Posted: {job.postedDate}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
    color: '#212121',
  },
  bookmarkButton: {
    padding: 4,
  },
  details: {
    gap: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#424242',
    flex: 1,
  },
  footer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  postedDate: {
    fontSize: 12,
    color: '#757575',
    fontStyle: 'italic',
  },
});

export default JobCard;
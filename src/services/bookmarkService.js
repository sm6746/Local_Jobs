// src/services/bookmarkService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKMARK_STORAGE_KEY = '@lokalJobs:bookmarks';

// Save bookmarks to AsyncStorage
export const saveBookmarks = async (bookmarks) => {
  try {
    // Convert bookmarks to JSON string
    const jsonValue = JSON.stringify(bookmarks);
    // Store bookmarks in AsyncStorage
    await AsyncStorage.setItem(BOOKMARK_STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving bookmarks:', error);
    throw error; // Re-throw the error so the caller can handle it
  }
};

// Retrieve bookmarks from AsyncStorage
export const getBookmarks = async () => {
  try {
    // Get bookmarks data from AsyncStorage
    const jsonValue = await AsyncStorage.getItem(BOOKMARK_STORAGE_KEY);
    // Return parsed bookmarks or an empty array if no data exists
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error retrieving bookmarks:', error);
    throw error; // Re-throw the error for further handling
  }
};

// Clear all bookmarks from AsyncStorage
export const clearBookmarks = async () => {
  try {
    // Remove bookmarks from AsyncStorage
    await AsyncStorage.removeItem(BOOKMARK_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing bookmarks:', error);
    throw error; // Re-throw the error to handle it in the caller function
  }
};

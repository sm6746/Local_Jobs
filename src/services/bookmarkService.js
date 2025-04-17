
import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKMARK_STORAGE_KEY = '@lokalJobs:bookmarks';


export const saveBookmarks = async (bookmarks) => {
  try {
    
    const jsonValue = JSON.stringify(bookmarks);
    
    await AsyncStorage.setItem(BOOKMARK_STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving bookmarks:', error);
    throw error; 
  }
};


export const getBookmarks = async () => {
  try {
    
    const jsonValue = await AsyncStorage.getItem(BOOKMARK_STORAGE_KEY);
    
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error retrieving bookmarks:', error);
    throw error; 
  }
};


export const clearBookmarks = async () => {
  try {
    
    await AsyncStorage.removeItem(BOOKMARK_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing bookmarks:', error);
    throw error; 
  }
};

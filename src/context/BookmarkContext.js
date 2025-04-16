// src/context/BookmarkContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getBookmarks, saveBookmarks } from '../services/bookmarkService';

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const load = async () => {
      const stored = await getBookmarks();
      setBookmarks(stored);
    };
    load();
  }, []);

  const addBookmark = async (job) => {
    const updated = [...bookmarks, job];
    setBookmarks(updated);
    await saveBookmarks(updated);
  };

  const removeBookmark = async (jobId) => {
    const updated = bookmarks.filter(job => job.id !== jobId);
    setBookmarks(updated);
    await saveBookmarks(updated);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) throw new Error('useBookmarks must be used within a BookmarkProvider');
  return context;
};


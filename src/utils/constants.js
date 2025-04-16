// src/utils/constants.js
export const API_BASE_URL = 'https://testapi.getlokalapp.com/common/jobs?page=1'
export const JOBS_ENDPOINT = `${API_BASE_URL}/jobs`;
export const ITEMS_PER_PAGE = 10; // Adjust based on actual API behavior

// Format functions
export const formatDate = (dateString) => {
  if (!dateString) return 'Not specified';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    return dateString; // Return original string if parsing fails
  }
};

export const formatSalary = (salary) => {
  if (!salary) return 'Not specified';
  
  // Handle different salary formats
  if (typeof salary === 'number') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(salary);
  }
  
  return salary;
};

// Network status utilities
export const isNetworkError = (error) => {
  return (
    error.message.includes('Network Error') ||
    error.message.includes('timeout') ||
    error.message.includes('connection') ||
    !navigator.onLine
  );
};

// Placeholder data for testing
export const PLACEHOLDER_JOB = {
  id: 'placeholder',
  title: 'Loading Job Details...',
  company: 'Loading...',
  location: 'Loading...',
  salary: 'Loading...',
  phone: 'Loading...',
  description: 'Loading job description...',
  postedDate: 'Loading...'
};
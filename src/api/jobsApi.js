const BASE_URL = 'https://testapi.getlokalapp.com/common';

export const fetchJobs = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/jobs?page=${page}`);
    const data = await response.json();

    if (Array.isArray(data.results)) {
      return {
        results: data.results,
        hasMore: data.results.length > 0,
      };
    } else {
      throw new Error('Invalid job data format');
    }
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return { results: [], hasMore: false };
  }
};


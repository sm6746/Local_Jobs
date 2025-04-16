// src/utils/dataTransformer.js
import { formatDate, formatSalary } from './constants';

/**
 * Normalize job data from API to ensure consistent structure
 * @param {Object} job - Raw job data from API
 * @returns {Object} - Normalized job data
 */
export const normalizeJobData = (job) => {
  // Create a normalized job object with fallbacks for missing data
  return {
    id: job.id || String(Date.now()),
    title: job.title || 'Untitled Position',
    company: job.company || 'Company not specified',
    location: job.location || 'Location not specified',
    salary: formatSalary(job.salary),
    phone: job.phone || 'Not available',
    email: job.email || null,
    description: job.description || 'No description available',
    requirements: job.requirements || null,
    benefits: job.benefits || null,
    postedDate: job.postedDate ? formatDate(job.postedDate) : 'Recently posted',
    // Add any additional fields needed
  };
};

/**
 * Process and normalize an array of jobs from the API
 * @param {Array} jobs - Array of job objects from API
 * @returns {Array} - Array of normalized job objects
 */
export const processJobsData = (jobs) => {
  if (!Array.isArray(jobs)) {
    console.warn('Invalid jobs data format');
    return [];
  }
  
  return jobs.map(job => normalizeJobData(job));
};
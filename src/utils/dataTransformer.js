
import { formatDate, formatSalary } from './constants';


export const normalizeJobData = (job) => {
  
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
  }
};


export const processJobsData = (jobs) => {
  if (!Array.isArray(jobs)) {
    console.warn('Invalid jobs data format');
    return [];
  }
  
  return jobs.map(job => normalizeJobData(job));
};
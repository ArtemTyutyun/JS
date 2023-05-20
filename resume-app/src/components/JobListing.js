import React from 'react';
import Job from './Job';

const JobListing = () => {
  const jobs = [
    {
      title: 'Senior Frontend Developer',
      description:
        'Development and supporting payment page for the biggest EU travel agency. Using a micro front-end approach to be able to integrate the solution in different products of the company.',
      name: 'Ciklum, Vinnytsia',
      link: 'https://tui.co.uk'
    },
    {
      title: 'Senior Software Engineer/Team Lead of Mobile department',
      description:
        'Developing a mobile application for visualization SaaS application: working with the team from all around the world I, as a senior engineer, took part in creating an application for the SaaS platform using React Native and reused up to 70% of the already existing codebase for business logic. Leaded team of four people, my responsibilities in this role are onboarding, mentoring, prioritization, and allocation of tasks to team members load.',
      name: 'Visme.co, remote, contract',
      link: ''
    }
  ];

  return (
    <div>
      <h2 className='list'>Job Listings:</h2>
      {jobs.map((job, index) => (
        <Job key={index} {...job} />
      ))}
    </div>
  );
};

export default JobListing;
import React from 'react';

const Job = ({ title, description, name, link }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{name}</p>
      <a href={link}>{link}</a>
    </div>
  );
};

export default Job;
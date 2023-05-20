import React, { useState } from 'react';

const JobForm = ({ addJob }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const job = { title, description, name, link };
    addJob(job);
    setTitle('');
    setDescription('');
    setName('');
    setLink('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className='add'>Add Job</h2>
      <label className='tit'>Title:</label>
      <input className='inp'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label className='desc'>Description:</label>
      <input className='inp'
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label className='name'>Name:</label>
      <input className='inp'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label className='link'>Link:</label>
      <input className='inp'
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
      />
      <button type="submit" className='sub'>Add</button>
    </form>
  );
};

export default JobForm;
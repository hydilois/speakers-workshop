/** @format */

import React from 'react';

const Speaker = ({
  first,
  last,
  company,
  bio,
  id,
  twitterHandle,
  sessions,
}) => {
  return (
    <div className='ui card'>
      <div className='image'>
        <img alt='' src={`images/speaker-${id}.jpg`} />
      </div>
      <div className='content'>
        <span className='header'>
          {first} - {last}
        </span>

        <div className='description'>{bio}</div>
        <div className='ui divider'></div>
        <div className='meta'>
          <span>
            <i className='user icon'></i>@{twitterHandle}
          </span>
        </div>

        <div className='ui divider'></div>
        <span>
          <i className='home icon'></i>
          {company}
        </span>
      </div>
      <div className='extra content'>
        <span href='#'>
          <i className='bullhorn icon'></i>
          {sessions.length}
        </span>
      </div>
    </div>
  );
};

export default Speaker;

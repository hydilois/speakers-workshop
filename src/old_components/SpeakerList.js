/** @format */

import React from 'react';
import SpeakerDetail from './SpeakerDetail';

const SpeakerList = ({ speakers }) => {
  return (
    <div className='ui four colunn stackable grid'>
      {speakers.map((speaker, index) => {
        return (
          <div className='four wide column' key={index}>
            <SpeakerDetail {...speaker} key={index} />
          </div>
        );
      })}
    </div>
  );
};

export default SpeakerList;

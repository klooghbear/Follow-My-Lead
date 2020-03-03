import React from 'react';
import { Link } from 'react-router-dom';

function WorkInProgress() {
  return (
    <div className="about">
      <div className="blurb-container">
        <div className="blurb-headline">Social</div>
        <br />
        <div className="blurb-text form-container">
          Looks like social hasn't been uploaded yet, too busy walking dogs!
        </div>
        <div >
          <img className='profile-picture' src="../../server/public/images/dogGif.gif"/>
        </div>
      </div>
    </div>
  );
}

export default WorkInProgress;

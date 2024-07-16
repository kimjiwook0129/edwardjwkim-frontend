import React from 'react';
import './Summary.css';

const Summary: React.FC = () => {
  return (
    <div className="summary-container">
        <div className="text-container">
        <h1>Hi, I'm <strong>Edward Kim.</strong>
        </h1>
      <p>
      I'm a data professional with a keen interest and skills in AI, data engineering, machine learning, and building data pipelines.
      </p>
      </div>
      <div className="image-container">
        <img src="/profile.png" alt="Edward Jiwook Kim" className="profile-image" />
      </div>
    </div>
  );
};

export default Summary;
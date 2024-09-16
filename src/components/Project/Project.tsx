import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import './Project.css';
import * as data from './Projects.json';
import { useLanguage } from '../LanguageContext';

const projects = JSON.parse(JSON.stringify(data));

const Project: React.FC = () => {
    const { language } = useLanguage();
  
    return (
      <div className="project-container">
        Hello
      </div>
    );
  };
  


export default Project;

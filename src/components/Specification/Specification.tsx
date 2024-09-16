import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import './Specification.css';
import * as data from './Specifications.json';
import { useLanguage } from '../LanguageContext';

const specifications = JSON.parse(JSON.stringify(data));

const Specification: React.FC = () => {
    const { language } = useLanguage();
  
    return (
      <div className="specification-container">
        Hello
      </div>
    );
  };
  


export default Specification;

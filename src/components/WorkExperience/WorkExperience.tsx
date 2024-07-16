import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import './WorkExperience.css';
import * as data from './experiences.json';

const experiencesString = JSON.stringify(data);
const experiences = JSON.parse(experiencesString);

type WorkExperienceProps = {
    title: string;
    type: string;
};


const formatDuration = (duration: string) => {
  const [start, end] = duration.split(',');
  const startDate = parseISO(start);
  const endDate = parseISO(end);
  return `${format(startDate, 'MMM yyyy')} - ${format(endDate, 'MMM yyyy')}`;
};


const WorkExperience: React.FC<WorkExperienceProps> = (props: WorkExperienceProps) => {
    const [language, setLanguage] = useState('en');
    const experienceList = experiences[props.type][language];
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
    return (
      <div className="work-experience-container">
          <div className="header">
            <h1 className="experiences-type">{props.title}</h1>
          </div>
        
        <div className="experience-list">
            {experienceList.map((experience: any, index: number) => (
                <div key={index} className="experience-item">
                    <div className="job-title">
                    {experience.title}
                    </div>
                    <div className="job-company">
                    {experience.company}
                    </div>
                    <div className="job-duration">
                    {formatDuration(experience.duration)}
                    </div>
                </div>
            ))}
            </div>
      </div>
    );
  };
  
  export default WorkExperience;
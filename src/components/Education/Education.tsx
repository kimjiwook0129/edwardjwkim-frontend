import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import './Education.css';
import * as data from './education.json';
import { useLanguage } from '../LanguageContext';

const educationsString = JSON.stringify(data);
const educations = JSON.parse(educationsString);

const formatDuration = (duration: string) => {
  const [start, end] = duration.split(',');
  const startDate = parseISO(start);
  const endDate = parseISO(end);
  return `${format(startDate, 'MMM yyyy')} - ${format(endDate, 'MMM yyyy')}`;
};

const WorkExperience: React.FC<{}> = () => {
    const { language } = useLanguage();
    const educationList = educations[language];
    const educationType = educations[language + '-title'];
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleViewDetails = (index: number) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className="work-experience-container">
            <div className="header">
                <h1 className="experiences-type">Education</h1>
            </div>
            <div className="experience-list">
                {educationList.map((education: any, index: number) => (
                    <div key={index} className="education-item">
                        <div className="education-school">{education.school}</div>
                        <div className="education-program">{education.program}</div>
                        <div className="job-duration">{formatDuration(education.duration)}</div>
                        <div className="job-location">{education.location}</div>
                        <button
                            className="view-details-button"
                            onClick={() => handleViewDetails(index)}
                        >
                            {expandedIndex === index ? 'Hide Details' : 'View Details'}
                        </button>
                    </div>
                ))}
            </div>
            <div className={`details-box ${expandedIndex !== null ? 'visible' : ''}`}>
                {expandedIndex !== null && (
                    <>
                        <h2>{educationList[expandedIndex].title}</h2>
                        <p><strong> {educationList[expandedIndex].school}</strong></p>
                        <p><strong>Duration:</strong> {formatDuration(educationList[expandedIndex].duration)}</p>
                        <p><strong>Location:</strong> {educationList[expandedIndex].location}</p>
                        <p><strong>Summary:</strong></p>
                        {educationList[expandedIndex].summary.map((point: string, index: number) => (
                          <React.Fragment key={index}><p>{"- " + point}</p></React.Fragment>
                          ))}   
                          <br />
                        <p><strong>Description:</strong></p>
                        {educationList[expandedIndex].description.map((paragraph: string, index: number) => (
                          <React.Fragment key={index}><p>{paragraph}</p></React.Fragment>
                          ))}   
                    </>
                )}
            </div>
        </div>
    );
};

export default WorkExperience;

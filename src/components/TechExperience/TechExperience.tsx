import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import './TechExperience.css';
import * as data from './TechExperiences.json';
import { useLanguage } from '../LanguageContext';

const experiences = JSON.parse(JSON.stringify(data));

type TechExperienceProps = {
    type: string;
};

const formatDuration = (duration: string) => {
  const [start, end] = duration.split(',');
  const startDate = parseISO(start);
  const endDate = parseISO(end);
  return `${format(startDate, 'MMM yyyy')} - ${format(endDate, 'MMM yyyy')}`;
};

const TechExperience: React.FC<TechExperienceProps> = ({ type }) => {
    const { language } = useLanguage();
    const experiencesList = experiences["tech-experiences"]
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleViewDetails = (index: number) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className="work-experience-container">
            <div className="header">
                <h1 className="experiences-type">Tech Experiences</h1>
            </div>
            <div className="experience-list">
                {experiencesList.map((experience: any, index: number) => (
                    <div key={index} className={`experience-item ${expandedIndex === index ? 'expanded' : ''}`}>
                        <div className="experience-summary" onClick={() => handleViewDetails(index)}>
                            <div className="job-title">{experience[`${language}-title`]}</div>
                            <div className="job-company">{experience[`${language}-company`]}</div>
                            <div className="job-duration">{formatDuration(experience['duration'])}</div>
                            <div className="job-location">{experience[`${language}-location`]}</div>
                            <button className="view-details-button">
                                {language === 'en' 
                                    ? (expandedIndex === index ? 'Hide Details' : 'View Details') 
                                    : (expandedIndex === index ? '숨기기' : '자세히 보기')}
                            </button>
                        </div>
                        {expandedIndex === index && (
                            <div className="details-box">
                                <div className="skills">
                                    <p><strong>Skills:</strong></p>
                                    {experience[`${language}-skills`].map((skill: any, idx: number) => (
                                        <span key={idx}>{idx > 0 && '• '}<i>{skill}</i></span>
                                    ))}
                                </div>  
                                
                                {experience.techStacks.length > 0 && (
                                    <div className="skills">
                                        <p><strong>Tech/Tool Stacks:</strong></p>
                                        <div className="tech-stack-list">
                                            {experience.techStacks.map((tech: any, idx: number) => (
                                                <div key={idx} className="tech-stack">
                                                    <img src={tech.icon} alt={tech.name} title={tech.name} className="tech-icon"/>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <p><strong>Summary:</strong></p>
                                <div>
                                
                                    {experience[`${language}-summary`].map((point: string, idx: number) => (
                                        <React.Fragment key={idx}>
                                            <p style={{ margin: '10px', padding: '0px' }}>{"• " + point}</p>
                                        </React.Fragment>
                                    ))}   
                                </div>
                                <p><strong>Description:</strong></p>
                                {experience[`${language}-description`].map((paragraph: string, idx: number) => (
                                    <React.Fragment key={idx}>
                                        <p style={{ margin: '10px', padding: '0px' }}>{paragraph}</p>
                                    </React.Fragment>
                                ))}   
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechExperience;

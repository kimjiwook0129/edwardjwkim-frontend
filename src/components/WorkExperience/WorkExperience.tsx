import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import './WorkExperience.css';
import * as data from './experiences.json';
import { useLanguage } from '../LanguageContext';

const experiencesString = JSON.stringify(data);
const experiences = JSON.parse(experiencesString);

type WorkExperienceProps = {
    type: string;
};

const formatDuration = (duration: string) => {
  const [start, end] = duration.split(',');
  const startDate = parseISO(start);
  const endDate = parseISO(end);
  return `${format(startDate, 'MMM yyyy')} - ${format(endDate, 'MMM yyyy')}`;
};

const WorkExperience: React.FC<WorkExperienceProps> = (props: WorkExperienceProps) => {
    const { language } = useLanguage();
    const experienceList = experiences[props.type][language];
    const experienceType = experiences[props.type][language + '-title'];
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleViewDetails = (index: number) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };

    return (
        <div className="work-experience-container">
            <div className="header">
                <h1 className="experiences-type">{experienceType}</h1>
            </div>
            <div className="experience-list">
                {experienceList.map((experience: any, index: number) => (
                    <div key={index} className="experience-item">
                        <div className="job-title">{experience.title}</div>
                        <div className="job-company">{experience.company}</div>
                        <div className="job-duration">{formatDuration(experience.duration)}</div>
                        <div className="job-location">{experience.location}</div>
                        <button
                            className="view-details-button"
                            onClick={() => handleViewDetails(index)}
                        >
                            {language === 'en' 
                                ? (expandedIndex === index ? 'Hide Details' : 'View Details') 
                                : (expandedIndex === index ? '숨기기' : '자세히 보기')}
                        </button>
                    </div>
                ))}
            </div>
            <div className={`details-box ${expandedIndex !== null ? 'visible' : ''}`}>
                {expandedIndex !== null && (
                    <>
                        <div className="skills">
                            <p><strong>Skills:</strong></p>
                            {experienceList[expandedIndex].skills.map((skill: any, index: number) => (
                                <span key={index}>{index > 0 && '• '}<i>{skill}</i></span>
                            ))}
                        </div>  
                        {experienceList[expandedIndex].techStacks.length > 0 && (
                            <div className="skills">
                                <p><strong>Tech/Tool Stacks:</strong></p>
                                <div className="tech-stack-list">
                                    {experienceList[expandedIndex].techStacks.map((tech: any, index: number) => (
                                        <div key={index} className="tech-stack">
                                            <img src={tech.icon} alt={tech.name} title={tech.name} className="tech-icon"/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <p><strong>Summary:</strong></p>
                        <div>
                        {experienceList[expandedIndex].summary.map((point: string, index: number) => (
                        <React.Fragment key={index}><p style={{ margin: '10px', padding: '0px' }}>{"• " + point}</p></React.Fragment>
                        ))}   
                        </div>
                        
                        <p><strong>Description:</strong></p>
                        {experienceList[expandedIndex].description.map((paragraph: string, index: number) => (
                          <React.Fragment key={index}><p style={{ margin: '10px', padding: '0px' }}>{paragraph}</p></React.Fragment>
                          ))}   
                    </>
                )}
            </div>
        </div>
    );
};

export default WorkExperience;

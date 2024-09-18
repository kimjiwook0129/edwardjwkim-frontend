import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import './TechExperience.css';
import '../Common/Common.css';
import * as data from './TechExperiences.json';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext'; 

const techExperiences = JSON.parse(JSON.stringify(data));

const formatDuration = (duration: string) => {
    const [start, end] = duration.split(',');
    const startDate = parseISO(start);
    const endDate = parseISO(end);
    return `${format(startDate, 'MMM yyyy')} - ${format(endDate, 'MMM yyyy')}`;
};

const TechExperience: React.FC = () => {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const techExperiencesList = techExperiences["tech-experiences"];
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [mouseDownTime, setMouseDownTime] = useState<number | null>(null);

    const handleViewDetails = (index: number) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };
    
    return (
        <div className="tech-experience-container">
            <h1 className="header">{techExperiences[`${language}-header`]}</h1>
            <p className="summary-paragraph">{techExperiences[`${language}-summary`]}</p>
            <p className="instruction">{techExperiences[`${language}-instruction`]}</p>
            <div className="tech-experience-list">
                {techExperiencesList.map((techExperience: any, index: number) => (
                    <div
                        key={index}
                        className={`tech-experience-item ${theme} ${expandedIndex === index ? 'expanded' : ''}`}
                        onMouseDown={() => setMouseDownTime(Date.now())}
                        onMouseUp={() => {
                            const currentTime = Date.now();
                            const timeDiff = currentTime - (mouseDownTime || 0);
                            if (timeDiff < 100) { 
                                handleViewDetails(index);
                            }
                        }}
                    >
                        <div className="tech-experience-summary">
                            <div className="tech-summary-left">
                                <div className="job-company">{techExperience[`${language}-company`]}</div>
                                <div className="job-title">
                                    <div className="job-role"> {techExperience[`${language}-role`]} </div>
                                    <div className="job-type">- {techExperience[`${language}-type`]}</div>
                                </div>
                            </div>
                            <div className="tech-summary-right">
                                <div className="job-location-duration">
                                    {/* <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by inkubators - Flaticon</a> */}
                                    <img src="./calendar.png" alt="" className="location-calendar-icon" />
                                    {formatDuration(techExperience['duration'])}
                                </div>
                                <div className="job-location-duration">
                                    {/* <a href="https://www.flaticon.com/free-icons/pin" title="pin icons">Pin icons created by Freepik - Flaticon</a> */}
                                    <img src="./location.png" alt="" className="location-calendar-icon" />
                                    {techExperience[`${language}-location`]}
                                </div>
                            </div>
                        </div>
                        {expandedIndex === index && (
                            <div className="tech-details-box">
                                <div className="skills">
                                    <span><strong>Skills:</strong></span>
                                    <div className="skills-list">
                                        {techExperience[`${language}-skills`].map((skill: any, idx: number) => (
                                            <span key={idx}>{idx > 0 && ' • '}<i>{skill}</i></span>
                                        ))}
                                    </div>
                                </div>
                                <div className="tech-stacks">
                                    <p><strong>{language === 'en' ? 'Tech/Tool Stacks:' : '기술/도구 스택:'}</strong></p>
                                    <div className="tech-stacks-list">
                                        {techExperience.techStacks.map((tech: any, idx: number) => (
                                            <div key={idx} className="tech-stack">
                                                <div className="tech-stack-circle">
                                                    <span className="tech-tooltip">{tech.name}</span>
                                                    <img src={tech.icon} alt={tech.name} className="tech-icon" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>  

                                <div className="summary-content">
                                    <p className="tech-detail-box-header">Summary</p>
                                    {techExperience[`${language}-summary`].map((point: string, idx: number) => (
                                        <div key={idx} className="summary-point">
                                            <img src="right-arrow.png" alt="icon" className="summary-icon" />
                                            <p className="summary-text">{point}</p>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="description-content">
                                    <p className = "tech-detail-box-header">Description</p>
                                    {techExperience[`${language}-description`].map((paragraph: string, idx: number) => (
                                        <p key={idx} style={{ margin: '10px 0', padding: '0px' }}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechExperience;


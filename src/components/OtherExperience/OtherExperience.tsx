import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import './OtherExperience.css';
import '../Common/Common.css';
import * as data from './OtherExperiences.json';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext'; 

const otherExperiences = JSON.parse(JSON.stringify(data));

const formatDuration = (duration: string) => {
    const [start, end] = duration.split(',');
    const startDate = parseISO(start);
    const endDate = parseISO(end);
    return `${format(startDate, 'MMM yyyy')} - ${format(endDate, 'MMM yyyy')}`;
};

const OtherExperience: React.FC = () => {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const otherExperiencesList = otherExperiences["other-experiences"];
    const parttimeExperiencesList = otherExperiences["part-time-experiences"];
    
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [mouseDownTime, setMouseDownTime] = useState<number | null>(null);

    const handleViewDetails = (index: number) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };
    
    return (
        <div className="other-experience-container">
            <h1 className="header">{otherExperiences[`${language}-header`]}</h1>
            <p className="summary-paragraph">{otherExperiences[`${language}-summary`]}</p>
            <p className="instruction">{otherExperiences[`${language}-instruction`]}</p>
            <div className="other-experience-list">
                {otherExperiencesList.map((otherExperience: any, index: number) => (
                    <div
                        key={index}
                        className={`other-experience-item ${theme} ${expandedIndex === index ? 'expanded' : ''}`}
                        onMouseDown={() => setMouseDownTime(Date.now())}
                        onMouseUp={() => {
                            const currentTime = Date.now();
                            const timeDiff = currentTime - (mouseDownTime || 0);
                            if (timeDiff < 100) { 
                                handleViewDetails(index);
                            }
                        }}
                    >
                        <div className="other-experience-summary">
                            <div className="other-summary-left">
                                <div className="job-company">{otherExperience[`${language}-company`]}</div>

                                <div className="job-title">
                                    <div className="job-role">
                                        {otherExperience[`${language}-role`]} -<span className="job-type">{otherExperience[`${language}-type`]}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="other-summary-right">
                                <div className="job-location-duration">
                                    {/* <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by inkubators - Flaticon</a> */}
                                    <img src="./calendar.png" alt="" className="location-calendar-icon" />
                                    {formatDuration(otherExperience['duration'])}
                                </div>
                                <div className="job-location-duration">
                                    {/* <a href="https://www.flaticon.com/free-icons/pin" title="pin icons">Pin icons created by Freepik - Flaticon</a> */}
                                    <img src="./location.png" alt="" className="location-calendar-icon" />
                                    {otherExperience[`${language}-location`]}
                                </div>
                            </div>
                        </div>
                        {expandedIndex === index && (
                            <div className="other-details-box">
                                <div className="skills">
                                    <span><strong>Skills:</strong></span>
                                    <div className="skills-list">
                                        {otherExperience[`${language}-skills`].map((skill: any, idx: number) => (
                                            <span key={idx}>{idx > 0 && ' • '}<i>{skill}</i></span>
                                        ))}
                                    </div>
                                </div>
                                <div className="summary-content">
                                    <p className="other-detail-box-header">Summary</p>
                                    {otherExperience[`${language}-summary`].map((point: string, idx: number) => (
                                        <div key={idx} className="summary-point">
                                            <img src="right-arrow.png" alt="icon" className="summary-icon" />
                                            <p className="summary-text">{point}</p>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="description-content">
                                    <p className = "other-detail-box-header">Description</p>
                                    {otherExperience[`${language}-description`].map((paragraph: string, idx: number) => (
                                        <p key={idx} style={{ margin: '10px 0', padding: '0px' }}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <br />
            <h1 className="header">{otherExperiences[`${language}-header2`]}</h1>
            <p className="summary-paragraph">{otherExperiences[`${language}-summary2`]}</p>
            <div className="parttime-experience-list">
                {parttimeExperiencesList.map((parttimeExperience: any, index: number) => (
                    <div className="parttime-experience-item" key={index}>
                        <p className="parttime-info">{parttimeExperience[`${language}-info`]}</p>
                        <p className="parttime-duration">{parttimeExperience["duration"]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherExperience;


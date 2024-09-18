import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import './Education.css';
import '../Common/Common.css';
import * as data from './Education.json';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext'; 

const educations = JSON.parse(JSON.stringify(data));

const formatDuration = (duration: string) => {
    const [start, end] = duration.split(',');
    const startDate = parseISO(start);
    const endDate = parseISO(end);
    return `${format(startDate, 'MMM yyyy')} - ${format(endDate, 'MMM yyyy')}`;
};

const Education: React.FC = () => {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const EducationList = educations["educations"];
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const [mouseDownTime, setMouseDownTime] = useState<number | null>(null);

    const handleViewDetails = (index: number) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };
    
    return (
        <div className="education-container">
            <h1 className="header">{educations[`${language}-header`]}</h1>
            <p className="summary-paragraph">{educations[`${language}-summary`]}</p>
            <p className="instruction">{educations[`${language}-instruction`]}</p>
            <div className="education-list">
                {EducationList.map((education: any, index: number) => (
                    <div
                        key={index}
                        className={`education-item ${theme} ${expandedIndex === index ? 'expanded' : ''}`}
                        onMouseDown={() => setMouseDownTime(Date.now())}
                        onMouseUp={() => {
                            const currentTime = Date.now();
                            const timeDiff = currentTime - (mouseDownTime || 0);
                            if (timeDiff < 100) { 
                                handleViewDetails(index);
                            }
                        }}
                    >
                        <div className="education-summary">
                            <div className="education-summary-left">
                                <div className="education-institution">{education[`${language}-school`]}</div>
                                <div className="program-title">
                                    <div className="program-role"> {education[`${language}-program`]} </div>
                                </div>
                            </div>
                            <div className="education-right">
                                <div className="program-location-duration">
                                    {/* <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by inkubators - Flaticon</a> */}
                                    <img src="./calendar.png" alt="" className="location-calendar-icon" />
                                    {formatDuration(education['duration'])}
                                </div>
                                <div className="job-location-duration">
                                    {/* <a href="https://www.flaticon.com/free-icons/pin" title="pin icons">Pin icons created by Freepik - Flaticon</a> */}
                                    <img src="./location.png" alt="" className="location-calendar-icon" />
                                    {education[`${language}-location`]}
                                </div>
                            </div>
                        </div>
                        {expandedIndex === index && (
                            <div className="eduation-details-box">
                                <div className="summary-content">
                                    <p className="eduation-detail-box-header">Summary</p>
                                    {education[`${language}-summary`].map((point: string, idx: number) => (
                                        <div key={idx} className="summary-point">
                                            <img src="right-arrow.png" alt="icon" className="summary-icon" />
                                            <p className="summary-text">{point}</p>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="description-content">
                                    <p className = "eduation-detail-box-header">Description</p>
                                    {education[`${language}-description`].map((paragraph: string, idx: number) => (
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

export default Education;


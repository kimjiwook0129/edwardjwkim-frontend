import React, { useState } from 'react';
import { format, parseISO } from 'date-fns';
import './Project.css';
import '../Common/Common.css';
import * as data from './Projects.json';
import { useLanguage } from '../LanguageContext';
import { useTheme } from '../ThemeContext'; 

const projects = JSON.parse(JSON.stringify(data));

const formatDuration = (duration: string) => {
    const [start, end] = duration.split(',');
    const startDate = parseISO(start);
    const endDate = parseISO(end);
    return `${format(startDate, 'MMM yyyy')} - ${format(endDate, 'MMM yyyy')}`;
};

const Project: React.FC = () => {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const majorList = projects["publication-major-projects"];
    const minorList = projects["minor-projects"];
    const toyList = projects["toy-projects"];
    
    const [expandedIndex, setExpandedIndex] = useState<{ listType: string; index: number } | null>(null);
    const [mouseDownTime, setMouseDownTime] = useState<number | null>(null);

    const handleViewDetails = (listType: string, index: number) => {
        if (expandedIndex?.listType === listType && expandedIndex?.index === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex({ listType, index });
        }
    };
    
    return (
        <div className="projects-container">
            <h1 className="header">{projects[`${language}-header1`]}</h1>
            <p className="summary-paragraph">{projects[`${language}-summary1`]}</p>
            <p className="instruction">{projects[`${language}-instruction`]}</p>
            <div className="major-or-minor-projects-list">
                {majorList.map((majorProject: any, index: number) => (
                    <div
                        key={`major-${index}`}
                        className={`major-project-item ${theme} ${expandedIndex?.listType === 'major' && expandedIndex?.index === index ? 'expanded' : ''}`}
                        onMouseDown={() => setMouseDownTime(Date.now())}
                        onMouseUp={() => {
                            const currentTime = Date.now();
                            const timeDiff = currentTime - (mouseDownTime || 0);
                            if (timeDiff < 100) { 
                                handleViewDetails('major', index);
                            }
                        }}
                    >
                        <div className="major-project-summary">
                            <div className="major-project-left">
                                <div className="project-title">{majorProject[`${language}-title`]}</div>
                                <div className="project-type">{majorProject[`${language}-type`]}</div>
                            </div>
                            <div className="major-project-right">
                                <div className="job-location-duration">
                                    <img src="./calendar.png" alt="" className="location-calendar-icon" />
                                    {formatDuration(majorProject['duration'])}
                                </div>
                                <div className="job-location-duration">
                                    <img src="./location.png" alt="" className="location-calendar-icon" />
                                    {majorProject[`${language}-organization`]}
                                </div>
                            </div>
                        </div>
                        {expandedIndex?.listType === 'major' && expandedIndex?.index === index && (
                            <div className="project-details-box">
                                <div className="skills">
                                    <span><strong>Skills:</strong></span>
                                    <div className="skills-list">
                                        {majorProject[`${language}-skills`].map((skill: any, idx: number) => (
                                            <span key={idx}>{idx > 0 && ' • '}<i>{skill}</i></span>
                                        ))}
                                    </div>
                                </div>
                                <div className="tech-stacks">
                                    <p><strong>{language === 'en' ? 'Tech/Tool Stacks:' : '기술/도구 스택:'}</strong></p>
                                    <div className="tech-stacks-list">
                                        {majorProject.techStacks.map((tech: any, idx: number) => (
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
                                    <p className="project-detail-box-header">Summary</p>
                                    {majorProject[`${language}-summary`].map((point: string, idx: number) => (
                                        <div key={idx} className="summary-point">
                                            <img src="right-arrow.png" alt="icon" className="summary-icon" />
                                            <p className="summary-text">{point}</p>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="description-content">
                                    <p className="project-detail-box-header">Description</p>
                                    {majorProject[`${language}-description`].map((paragraph: string, idx: number) => (
                                        <p key={idx} style={{ margin: '10px 0', padding: '0px' }}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <br />
            <h1 className="header">{projects[`${language}-header2`]}</h1>
            <p className="summary-paragraph">{projects[`${language}-summary2`]}</p>
            <div className="major-or-minor-projects-list">
                {minorList.map((project: any, index: number) => (
                    <div
                        key={`minor-${index}`}
                        className={`minor-project-item ${theme} ${expandedIndex?.listType === 'minor' && expandedIndex?.index === index ? 'expanded' : ''}`}
                        onMouseDown={() => setMouseDownTime(Date.now())}
                        onMouseUp={() => {
                            const currentTime = Date.now();
                            const timeDiff = currentTime - (mouseDownTime || 0);
                            if (timeDiff < 100) { 
                                handleViewDetails('minor', index);
                            }
                        }}
                    >
                        <div className="major-project-summary">
                            <div className="major-project-left">
                                <div className="project-title">{project[`${language}-title`]}</div>
                                <div className="project-type">{project[`${language}-type`]}</div>
                            </div>
                            <div className="major-project-right">
                                <div className="job-location-duration">
                                    <img src="./calendar.png" alt="" className="location-calendar-icon" />
                                    {formatDuration(project['duration'])}
                                </div>
                                <div className="job-location-duration">
                                    <img src="./location.png" alt="" className="location-calendar-icon" />
                                    {project[`${language}-organization`]}
                                </div>
                            </div>
                        </div>
                        {expandedIndex?.listType === 'minor' && expandedIndex?.index === index && (
                            <div className="project-details-box">
                                <div className="skills">
                                    <span><strong>Skills:</strong></span>
                                    <div className="skills-list">
                                        {project[`${language}-skills`].map((skill: any, idx: number) => (
                                            <span key={idx}>{idx > 0 && ' • '}<i>{skill}</i></span>
                                        ))}
                                    </div>
                                </div>
                                <div className="tech-stacks">
                                    <p><strong>{language === 'en' ? 'Tech/Tool Stacks:' : '기술/도구 스택:'}</strong></p>
                                    <div className="tech-stacks-list">
                                        {project.techStacks.map((tech: any, idx: number) => (
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
                                    <p className="project-detail-box-header">Summary</p>
                                    {project[`${language}-summary`].map((point: string, idx: number) => (
                                        <div key={idx} className="summary-point">
                                            <img src="right-arrow.png" alt="icon" className="summary-icon" />
                                            <p className="summary-text">{point}</p>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="description-content">
                                    <p className="project-detail-box-header">Description</p>
                                    {project[`${language}-description`].map((paragraph: string, idx: number) => (
                                        <p key={idx} style={{ margin: '10px 0', padding: '0px' }}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <br />
            <h1 className="header">{projects[`${language}-header3`]}</h1>
            <p className="summary-paragraph">{projects[`${language}-summary3`]}</p>
            <div className="toy-project-list">
                {toyList.map((project: any, index: number) => (
                    <div className="toy-item" key={index}>
                        <div className="top-line">
                            <p className="toy-title">{project[`${language}-title`]}</p>
                            <div className="toy-tech-stacks">
                                {project.techStacks.map((tech: any, idx: number) => (
                                    <div key={idx} className="tech-stack-small">
                                        <div className="tech-stack-circle-small">
                                            <img src={tech.icon} alt={tech.name} className="tech-icon-small" />
                                            <span className="tech-tooltip-small">{tech.name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex-spacer"></div>
                            <p className="toy-duration">{project["duration"]}</p>
                        </div>
                        <p className="toy-info">{project[`${language}-info`]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;

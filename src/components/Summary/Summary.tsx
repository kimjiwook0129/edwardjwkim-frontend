import React from 'react';
import './Summary.css';
import { useLanguage } from '../LanguageContext';
import summaryData from './Summary.json';

const Summary: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="summary-container">
      <div className="image-container">
        <img src="/profile.png" alt="Edward Jiwook Kim" className="profile-image" />
      </div>

      <div className="content-container">
        <div className="text-container">
          {language === 'en' ? (
            <>
              <h3 className="hello">Hi, I'm <strong>Edward Kim.</strong></h3>
              <p>
                I am a tech enthusiast with a strong focus on <strong>AI, data science, and data engineering.</strong><br/><br/>
                I recently graduated from the <strong>University of Waterloo</strong>, where I studied <strong>applied mathematics and computing</strong>.
                My experience spans various industries, including <i> banking, e-commerce, and bio-lab</i>, 
                where I've worked in <strong>data engineering, data science, and data analysis roles</strong>.
              </p>
            </>
          ) : (
            <>
              <h3>안녕하세요, <strong>김지욱</strong>이라고 합니다.</h3>
              <p>
                기술에 열정이 있고, 주 기술은 <strong>AI, 데이터 사이언스, 데이터 엔지니어링</strong>입니다.<br/><br/>
                <strong>워털루 대학교</strong>에서 <strong>응용 수학 및 컴퓨팅</strong>을 전공했고,
                경력으로는 <i>은행, e-commerce, 생물학연구소</i> 등 다양한 분야에서 <strong>데이터 엔지니어 및 데이터 사이언티스트</strong>로서 일했습니다.
              </p>
            </>
          )}
        </div>

        <div className="links-container">
          {summaryData.icons.map((icon, index) => (
            <div className="link-circle" key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <img 
                  src={icon['icon']}
                  alt={icon.type.charAt(0).toUpperCase() + icon.type.slice(1)} 
                  className="link-icon" 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;

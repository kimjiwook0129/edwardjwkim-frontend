import React from 'react';
import './Summary.css';
import { useLanguage } from '../LanguageContext';

const Summary: React.FC = () => {

  const { language } = useLanguage();

  return (
    <div className="summary-container">
        <div className="text-container">
        {language === 'en' ? (
          <>
            <h2>Hi, I'm <strong>Edward Kim.</strong></h2>
            <p>
            I have a strong passion and expertise in AI, data science, and data engineering.
            </p>
          </>
        ) : (
          <>
            <h2>안녕하세요, <strong>김지욱</strong>이라고 합니다.</h2>
            <p>
              워털루대학교에서 응용수학과 전산학을 전공했으며,<br/> 현재 AI와 데이터 분야에서 일하고 있습니다.
               
            </p>
          </>
        )}
      </div>
      <div className="image-container">
        <img src="/profile.png" alt="Edward Jiwook Kim" className="profile-image" />
      </div>
    </div>
  );
};

export default Summary;
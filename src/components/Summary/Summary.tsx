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
            <h1>Hi, I'm <strong>Edward Kim.</strong></h1>
            <p>
            I have a strong interest and skills in AI, data engineering, machine learning, and building data pipelines.
            </p>
          </>
        ) : (
          <>
            <h1>안녕하세요, 제 이름은 <strong>김지욱</strong>입니다.</h1>
            <p>
              저는 워털루대학교에서 응용수학과 전산학을 전공하고,<br/> AI와 데이터 분야에서 일하고 있습니다.
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
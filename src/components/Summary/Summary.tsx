import React from 'react';
import './Summary.css';
import { useLanguage } from '../LanguageContext';

const Summary: React.FC = () => {

  const { language } = useLanguage();

  return (
    <div className="summary-container">
      <div className="image-container">
        <img src="/profile.png" alt="Edward Jiwook Kim" className="profile-image" />
      </div>
        <div className="text-container">
        {language === 'en' ? (
          <>
            <h2>Hi, I'm <strong>Edward Kim.</strong></h2>
            <p>
            I am a tech enthusiast with a strong focus on AI, data science, and data engineering.<br/><br/>
            
            I recently graduated from the University of Waterloo, where I studied applied mathematics and computing.
            My experience spans various industries, including banking, e-commerce, and bio-lab, 
            where I've worked in data engineering, data science, and data analysis roles.
            </p>
          </>
        ) : (
          <>
            <h2>안녕하세요, <strong>김지욱</strong>이라고 합니다.</h2>
            <p>
            기술에 열정이 있고, 주 기술은 AI, 데이터 사이언스, 데이터 엔지니어링입니다.<br/><br/>
            
            워털루 대학교에서 응용 수학 및 컴퓨팅을 전공하였으며, 최근 졸업하였습니다.
            경력으로는 은행, e-commerce, 생물학연구소 등 다양한 분야에서 데이터 엔지니어 및 데이터 사이언티스트로서 일했습니다.
            </p>
          </>
        )}
      </div>
      
    </div>
  );
};

export default Summary;
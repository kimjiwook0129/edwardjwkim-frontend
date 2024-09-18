import './Specification.css';
import '../Common/Common.css';
import * as data from './Specifications.json';
import { useLanguage } from '../LanguageContext';

const specifications = JSON.parse(JSON.stringify(data));

const OtherExperience: React.FC = () => {
    const { language } = useLanguage();
    const certificateList = specifications["certificates"];
    const scoresList = specifications["test-scores"];
    
    return (
        <div className="specifications-container">
            <h1 className="header">{specifications[`${language}-header1`]}</h1>
            <p className="summary-paragraph">{specifications[`${language}-summary1`]}</p>
            <div className="certificates-list">
                {certificateList.map((certificate: any, index: number) => (
                  <div className="certificate-item" key={index}>
                  <div className="certificate-top-line">
                      <p className="certificate-title">{certificate[`${language}-title`]}</p>
                      <div className="flex-spacer"></div>
                      <p className="certificate-date">{certificate["date"]}</p>
                  </div>
                  <p className="toy-info">{certificate[`${language}-organization`]}</p>
              </div>
                ))}
            </div>
            <br />
            <h1 className="header">{specifications[`${language}-header2`]}</h1>
            <p className="summary-paragraph">{specifications[`${language}-summary2`]}</p>
            <div className="certificates-list">
                {scoresList.map((certificate: any, index: number) => (
                  <div className="test-item" key={index}>
                  <div className="certificate-top-line">
                      <p className="certificate-title">{certificate[`${language}-title`]}</p>
                      <div className="flex-spacer"></div>
                      <p className="certificate-date">{certificate["date"]}</p>
                  </div>
              </div>
                ))}
            </div>
        </div>
    );
};

export default OtherExperience;


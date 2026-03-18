import React from 'react';
import SurveyBlock from './MainPageSurveyBlock';
import { LoggedInContext } from '../../App';

import './MainPageSurveys.scss';

function MainPageSurveys() {
  const { isLoggedIn } = React.useContext(LoggedInContext);

  const [surveys, setSurveys] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadSurveys() {
      const data = await fetchSurveys();
      setSurveys(data);
      setIsLoading(false);
    }
    loadSurveys();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={isLoggedIn ? 'main-page-surveys' : 'main-page-surveys logged'}>
      <p className="title">Опросы</p>
      <div className="main-page-survey-container">
        {surveys.map((survey, index) => (
          <SurveyBlock key={index} survey={survey} />
        ))}
      </div>
    </div>
  );
}

async function fetchSurveys() {
  const response = await fetch('http://localhost:8081/surveys');
  if (!response.ok) throw new Error('Failed to fetch surveys: ' + response.status);
  const data = await response.json();

  return data;
}

export default MainPageSurveys;

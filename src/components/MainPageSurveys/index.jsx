import React from 'react';
import SurveyBlock from './MainPageSurveyBlock';

import './MainPageSurveys.scss';

function MainPageSurveys() {
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
  console.log(surveys);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-page-surveys">
      <p className="title">Опросы</p>
      <div>
        {surveys.map((survey) => (
          <SurveyBlock key={survey.surveyId} survey={survey} />
        ))}
      </div>
    </div>
  );
}

async function fetchSurveys() {
  const response = await fetch('http://localhost:8081/surveys/');
  if (!response.ok) throw new Error('Failed to fetch surveys: ' + response.status);
  const data = await response.json();
  console.log(data);

  return data;
}

export default MainPageSurveys;

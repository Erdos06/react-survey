import './SurveyPage.scss';

import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

import SurveyPageHeader from './SurveyPageHeader';
import SurveyPageFooter from './SurveyPageFooter';
import RadioQuestionBlock from './QuestionBlock/RadioQuestionBlock';
import CheckBoxBlock from './QuestionBlock/CheckBoxBlock';
import ScaleBlock from './QuestionBlock/ScaleBlock';
import TextAreaBlock from './QuestionBlock/TextAreaBlock';
import SelectQuestionBlock from './QuestionBlock/SelectQuestionBlock';
import api from '../../api/axios';
import { AnswerProvider } from './AnswerContext';

function SurveyPage() {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [survey, setSurvey] = useState(null);
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(1);
  const [surveyAnswer, setSurveyAnswer] = useState({});

  useEffect(() => {
    async function loadSurvey() {
      try {
        setIsLoading(true);
        const surveysResponse = await api.get(`/surveys/${id}`);
        const surveyAnswerResponse = await api.post(`/surveys/${id}/start`);

        setSurvey(surveysResponse.data);
        setSurveyAnswer(surveyAnswerResponse.data);
      } catch (error) {
        console.error('Error fetching survey:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadSurvey();
  }, [id]);

  if (survey === null || isLoading) {
    return <div>Loading...</div>;
  }

  const questionForRender = survey.questions[currentQuestionIndex - 1];
  const renderQuestion = () => {
    switch (questionForRender.type.trim().toLowerCase()) {
      case 'radio':
        return <RadioQuestionBlock question={questionForRender} index={currentQuestionIndex - 1} />;
      case 'checkbox':
        return <CheckBoxBlock question={questionForRender} index={currentQuestionIndex - 1} />;
      case 'scale':
        return <ScaleBlock question={questionForRender} index={currentQuestionIndex - 1} />;
      case 'textarea':
        return <TextAreaBlock question={questionForRender} index={currentQuestionIndex - 1} />;
      case 'select':
        return (
          <SelectQuestionBlock question={questionForRender} index={currentQuestionIndex - 1} />
        );
      default:
        return <div>Unsupported question type</div>;
    }
  };

  return (
    <AnswerProvider>
      <div className="survey-page-main">
        <div className="survey-container">
          <SurveyPageHeader
            title={survey.title}
            author={survey.author}
            questionCount={survey.questions.length}
            currentQuestionIndex={currentQuestionIndex}
            date={new Date(survey.createdAt).toLocaleDateString()}
          />

          <main className="survey-content">{renderQuestion()}</main>

          <SurveyPageFooter
            currentQuestionIndex={currentQuestionIndex}
            setcurrentQuestionIndex={setcurrentQuestionIndex}
            totalQuestions={survey.questions.length}
            questions={survey.questions}
            surveyId={survey.surveyId}
          />
        </div>
      </div>
    </AnswerProvider>
  );
}

export default SurveyPage;

import React from 'react';
import './MainPageSurveyBlock.scss';
import { useNavigate } from 'react-router-dom';

function SurveyBlock({ survey }) {
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8081/surveys/' + survey.surveyId, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Опрос удален успешно:');
      alert('Опрос успешно удален!');
      navigate(0);
    } catch (err) {
      console.error(err);
      alert('Ошибка при удалении опроса');
    }
  };

  return (
    <div className="survey-block" role="button" tabIndex={0}>
      <div className="survey-content">
        <div className="survey-header-main-page">
          <h3 className="survey-title-main-page">{survey.title}</h3>
          {survey.category && <span className="survey-category">{survey.category}</span>}
        </div>
        <div className="survey-info">
          <div className="author-info">
            <svg className="author-icon" viewBox="0 0 24 24" width="16" height="16">
              <path
                fill="currentColor"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
            <span className="survey-author">{survey.author}</span>
          </div>
          <div className="survey-meta">
            {survey.questions.length && (
              <span className="question-count">
                <svg className="meta-icon" viewBox="0 0 24 24" width="14" height="14">
                  <path fill="currentColor" d="M4 6h16v2H4zm0 4h16v2H4zm0 4h10v2H4z" />
                </svg>
                {survey.questions.length} вопросов
              </span>
            )}
            <span className="survey-date">
              <svg className="meta-icon" viewBox="0 0 24 24" width="14" height="14">
                <path
                  fill="currentColor"
                  d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"
                />
              </svg>
              {new Date(survey.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="survey-footer">
          <span className="participation-count">
            <svg className="participants-icon" viewBox="0 0 24 24" width="14" height="14">
              <path
                fill="currentColor"
                d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
              />
            </svg>
            {survey.participants || 0} участников
          </span>
          <span
            className="survey-action"
            onClick={() => {
              window.location.href = `http://localhost:3000/surveys/${survey.surveyId}`;
            }}>
            Пройти опрос →
          </span>
        </div>
        <span className="delete-survey-button" onClick={handleDelete}>
          Удалить опрос
        </span>
        <span
          className="edit-survey-button"
          onClick={() => navigate(`/surveys/${survey.surveyId}/change`)}>
          Изменить опрос
        </span>
      </div>
    </div>
  );
}

export default SurveyBlock;

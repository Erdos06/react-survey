function SurveyPageHeader({ title, author, questionCount, currentQuestionIndex, date }) {
  return (
    <header className="survey-header">
      <div className="survey-info">
        <h1 className="survey-title">{title}</h1>
        <p className="survey-description">Помогите нам стать лучше. Опрос займет 3-5 минут.</p>
        <div className="survey-meta">
          <span className="meta-item">
            <i className="fas fa-user"></i> Автор: {author}
          </span>
          <span className="meta-item">
            <i className="fas fa-question-circle"></i> {questionCount} вопросов
          </span>
          <span className="meta-item">
            <i className="fas fa-clock"></i> Создано {date}
          </span>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-info">
          <span>
            Прогресс:{' '}
            <strong>
              {currentQuestionIndex}/{questionCount}
            </strong>
          </span>
          <span className="progress-percent">
            {Math.round((currentQuestionIndex / questionCount) * 100)}%
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${Math.round((currentQuestionIndex / questionCount) * 100)}%` }}></div>
        </div>
      </div>
    </header>
  );
}

export default SurveyPageHeader;

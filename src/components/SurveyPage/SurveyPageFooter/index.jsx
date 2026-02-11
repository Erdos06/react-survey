function SurveyPageFooter({
  currentQuestionIndex,
  setcurrentQuestionIndex,

  totalQuestions,
}) {
  return (
    <footer className="survey-footer">
      <div className="navigation-buttons">
        {currentQuestionIndex != 1 ? (
          <button
            className="btn btn-secondary"
            id="prev-btn"
            onClick={() => setcurrentQuestionIndex(currentQuestionIndex - 1)}>
            <i className="fas fa-arrow-left"></i> Назад
          </button>
        ) : (
          <button className="btn btn-secondary" id="prev-btn" style={{ visibility: 'hidden' }}>
            <i className="fas fa-arrow-left"></i> Назад
          </button>
        )}

        <div className="question-nav">
          {[...Array(totalQuestions)].map((_, idx) => (
            <button
              key={idx + 1}
              className={`nav-dot ${idx + 1 === currentQuestionIndex ? 'active' : ''}`}
              data-question={idx + 1}
              onClick={() => {
                setcurrentQuestionIndex(idx + 1);
              }}>
              {idx + 1}
            </button>
          ))}
        </div>

        {currentQuestionIndex < totalQuestions ? (
          <button
            className="btn btn-primary"
            id="next-btn"
            onClick={() => setcurrentQuestionIndex(currentQuestionIndex + 1)}>
            Далее <i className="fas fa-arrow-right"></i>
          </button>
        ) : (
          <button className="btn btn-primary" id="next-btn">
            Закончить <i className="fas fa-arrow-right"></i>
          </button>
        )}
      </div>

      <button className="btn btn-success" id="submit-btn">
        <i className="fas fa-paper-plane"></i> Отправить опрос
      </button>

      <div className="footer-info">
        <p className="required-notice">
          <span className="required">*</span> — обязательный вопрос
        </p>
        <p className="time-estimate">
          <i className="fas fa-clock"></i> Примерное время: 2 мин
        </p>
      </div>
    </footer>
  );
}

export default SurveyPageFooter;

import React, { useState } from 'react';
import Question from './QuestionTypes/Question';
import AddQuestion from './QuestionTypes/AddQuestion';
import './CreateSurveyPage.scss';

function CreateSurveyPage() {
  const [questions, setQuestions] = useState([{ id: 1, type: 'radio', text: '', options: [] }]);

  const addQuestion = () => {
    setQuestions((prev) => [...prev, { id: Date.now(), type: 'text', text: '', options: [] }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = {
      title: formData.get('surveyTitle'),
      author: 'Erdos',
      description: formData.get('surveyDescription'),
      questions: questions.map((q) => ({
        text: q.text,
        type: q.type,
        required: q.required || false,
        options: q.type === 'textarea' ? null : q.options.map((o) => ({ optionText: o })),
      })),
    };

    console.log(payload);

    try {
      const res = await fetch('http://localhost:8081/surveys/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      console.log('Опрос создан:', data);
      alert('Опрос успешно создан!');
    } catch (err) {
      console.error(err);
      alert('Ошибка при создании опроса');
    }
  };

  return (
    <main className="create-survey-page">
      <div className="create-survey-page-header">
        <h1>Создайте новый Опрос</h1>
      </div>

      <div className="create-survey-page-content">
        <form className="create-survey-form" onSubmit={handleSubmit}>
          <label className="survey-desription-label">
            <p>Название опроса:</p>
            <input
              type="text"
              name="surveyTitle"
              placeholder="Введите название опроса"
              className="survey-description-input"
            />
          </label>

          <label className="survey-desription-label">
            <p>Описание опроса:</p>
            <textarea
              name="surveyDescription"
              placeholder="Введите описание опроса"
              className="survey-description-input"
            />
          </label>

          {questions.map((question, index) => (
            <Question
              key={question.id}
              questionIndex={index}
              questions={questions}
              setQuestions={setQuestions}
            />
          ))}

          <AddQuestion addQuestion={addQuestion} questionIndex={questions.length + 1} />

          <button type="submit" className="create-survey-button">
            Создать Опрос
          </button>
        </form>
      </div>
    </main>
  );
}

export default CreateSurveyPage;

import React from 'react';
import { useParams } from 'react-router-dom';

import Question from '../CreateSurveyPage/QuestionTypes/Question';
import AddQuestion from '../CreateSurveyPage/QuestionTypes/AddQuestion';

function EditSurveyPage() {
  const { id } = useParams();
  const [questions, setQuestions] = React.useState([]);
  const [survey, setSurvey] = React.useState({});

  React.useEffect(() => {
    async function loadSurvey() {
      const data = await fetchSurvey(id);
      setSurvey(data);
      setQuestions(data.questions);
    }
    loadSurvey();
  }, []);

  const addQuestion = () => {
    setQuestions((prev) => [...prev, { id: Date.now(), type: 'text', text: '', options: [] }]);
  };

  const handleSubmitChange = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const payload = {
      surveyId: survey.surveyId,
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
      await fetch(`http://localhost:8081/surveys/${survey.surveyId}/change`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="create-survey-page">
      <div className="create-survey-page-header">
        <h1>Измените текущий опрос</h1>
      </div>

      <div className="create-survey-page-content">
        <form className="create-survey-form" onSubmit={handleSubmitChange}>
          <label className="survey-desription-label">
            <p>Название опроса:</p>
            <input
              type="text"
              name="surveyTitle"
              placeholder="Введите название опроса"
              className="survey-description-input"
              value={survey != null ? survey.title : ''}
              onChange={(e) => setSurvey({ ...survey, title: e.target.value })}
            />
          </label>

          <label className="survey-desription-label">
            <p>Описание опроса:</p>
            <textarea
              name="surveyDescription"
              placeholder="Введите описание опроса"
              className="survey-description-input"
              value={survey != null ? survey.description : ''}
              onChange={(e) => setSurvey({ ...survey, description: e.target.value })}
            />
          </label>

          {questions.map((question, index) => (
            <Question
              key={question.id}
              questionIndex={index}
              questions={questions}
              setQuestions={setQuestions}
              question={question}
            />
          ))}

          <AddQuestion addQuestion={addQuestion} questionIndex={questions.length + 1} />

          <button type="submit" className="create-survey-button">
            Изменить Опрос
          </button>
        </form>
      </div>
    </main>
  );
}

async function fetchSurvey(id) {
  let res = await fetch('http://localhost:8081/surveys/' + id);
  if (!res.ok) throw new Error('ERROR DURING CONNECTION TO BACKEND');
  const data = await res.json();

  console.log(data);
  return data;
}
export default EditSurveyPage;

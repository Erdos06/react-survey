import React from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/axios';

import Question from '../CreateSurveyPage/QuestionTypes/Question';
import AddQuestion from '../CreateSurveyPage/QuestionTypes/AddQuestion';

function EditSurveyPage() {
  const { id } = useParams();
  const [questions, setQuestions] = React.useState([]);
  const [survey, setSurvey] = React.useState({});

  React.useEffect(() => {
    async function loadSurvey() {
      try {
        const data = await api.get('/surveys/' + id).then((res) => res.data);
        setSurvey(data);

        const normalizedQuestions = data.questions.map((q) => ({
          ...q,
          options: q.options ? q.options.map((o) => o.optionText) : [],
        }));

        setQuestions(normalizedQuestions);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          alert('Пожалуйста, войдите в систему, чтобы изменить опрос.');
          window.location.href = '/login';
          localStorage.removeItem('token');
          return;
        }
        console.log(err);
      }
    }
    loadSurvey();
  }, [id]);

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
        options:
          q.type === 'textarea'
            ? null
            : q.options.map((o) => ({
                optionText: typeof o === 'string' ? o : o.optionText,
              })),
      })),
    };

    try {
      await api.put('/surveys/' + survey.surveyId + '/change', payload);
      alert('Опрос успешно изменен!');
      window.location.href = '/';
    } catch (err) {
      if (err.response && err.response.status === 401) {
        alert('Пожалуйста, войдите в систему, чтобы изменить опрос.');
        window.location.href = '/login';
        localStorage.removeItem('token');
        return;
      }
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
              key={question.questionId}
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

export default EditSurveyPage;

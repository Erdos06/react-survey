import React from 'react';

function QuestionTypeSelector({ questionType, setQuestionType }) {
  const setType = (type) => {
    console.log(type.target.value);
    setQuestionType(type.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
      <label htmlFor="questionType">Тип вопроса:</label>

      <select id="questionType" value={questionType} onChange={(e) => setType(e)}>
        <option value="">-- выбери тип --</option>
        <option value="radio">Radio</option>
        <option value="checkbox">Checkbox</option>
        <option value="scale">Scale</option>
        <option value="textarea">Text area</option>
      </select>
    </div>
  );
}

export default QuestionTypeSelector;

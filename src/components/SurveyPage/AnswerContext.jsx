import { createContext, useState, useContext } from 'react';

const AnswerContext = createContext();

export const AnswerProvider = ({ children }) => {
  const [textAreaAnswer, setTextAreaAnswer] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Функция для сброса ответов при переходе на новый вопрос
  const resetAnswers = () => {
    setTextAreaAnswer('');
    setSelectedOptions([]);
  };

  // Удобный метод для переключения чекбоксов
  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.some((o) => o.optionId === option.optionId)
        ? prev.filter((o) => o.optionId !== option.optionId)
        : [...prev, option],
    );
  };

  const value = {
    textAreaAnswer,
    setTextAreaAnswer,
    selectedOptions,
    setSelectedOptions,
    toggleOption,
    resetAnswers,
  };

  return <AnswerContext.Provider value={value}>{children}</AnswerContext.Provider>;
};

// Хук для удобного использования в компонентах
export const useAnswers = () => useContext(AnswerContext);

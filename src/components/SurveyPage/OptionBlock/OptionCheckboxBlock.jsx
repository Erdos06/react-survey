import { useAnswers } from '../AnswerContext';

function OptionCheckBoxBlock({ option }) {
  const { selectedOptions, setSelectedOptions } = useAnswers();

  // Проверяем, есть ли уже эта опция в списке выбранных
  const isSelected = selectedOptions.some((o) => o.optionId === option.optionId);

  const handleCheckboxChange = () => {
    if (isSelected) {
      // Если уже выбрано — удаляем из массива
      setSelectedOptions(selectedOptions.filter((o) => o.optionId !== option.optionId));
    } else {
      // Если не выбрано — добавляем объект опции в массив
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <label className="option-item checkbox-option">
      <input
        type="checkbox"
        name="question2"
        value={option.optionId}
        checked={isSelected}
        onChange={handleCheckboxChange}
      />
      <span className="custom-checkbox"></span>
      <span className="option-text">{option.optionText}</span>
    </label>
  );
}

export default OptionCheckBoxBlock;

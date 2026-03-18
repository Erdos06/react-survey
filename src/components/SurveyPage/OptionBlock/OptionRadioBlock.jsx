import { useAnswers } from '../AnswerContext';

function OptionRadioBlock({ option, isSelected, onSelect }) {
  const { selectedOptions, setSelectedOptions } = useAnswers();

  return (
    <label className="option-item radio-option">
      <input
        type="radio"
        name="question1"
        value={option.optionId}
        onClick={() => {
          console.log('Option selected:', option);
          setSelectedOptions([option]);
        }}
        checked={isSelected}
      />
      <span className="custom-radio"></span>
      <span className="option-text">{option.optionText}</span>
    </label>
  );
}

export default OptionRadioBlock;

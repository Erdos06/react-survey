function OptionRadioBlock({ option, isSelected, onSelect }) {
  return (
    <label className="option-item radio-option">
      <input type="radio" name="question1" value={option.optionId} />
      <span className="custom-radio"></span>
      <span className="option-text">{option.optionText}</span>
    </label>
  );
}

export default OptionRadioBlock;

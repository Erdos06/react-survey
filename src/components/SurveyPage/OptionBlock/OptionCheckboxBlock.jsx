function OptionCheckBoxBlock({ option }) {
  return (
    <label className="option-item checkbox-option">
      <input type="checkbox" name="question2" value={option.optionId} />
      <span className="custom-checkbox"></span>
      <span className="option-text">{option.optionText}</span>
    </label>
  );
}

export default OptionCheckBoxBlock;

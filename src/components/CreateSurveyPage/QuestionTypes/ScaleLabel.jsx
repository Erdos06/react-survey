function ScaleLabel({ index, options, setOptions }) {
  return (
    <label className="scale-label">
      <p>{index + 1} опция</p>
      <input
        className="scale-option-input"
        placeholder="Введите опцию"
        type="text"
        onChange={(e) => {
          const updatedOptions = options.map((opt, i) => (i === index ? e.target.value : opt));
          setOptions(updatedOptions);
        }}
        value={options[index].optionText}
      />
    </label>
  );
}

export default ScaleLabel;

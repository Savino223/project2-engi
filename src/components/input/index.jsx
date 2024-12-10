import "./index.css";

function Inputs(props) {
  const {
    variant = "usual", 
    label,
    type = "text", 
    placeholder,
    value,
    onChange,
    disabled = false,
    danger = false, 
  } = props;

  const classes = `inputator inputator--${danger ? "danger" : variant}`;
  const upper_classes = `inputer-upper inputer-upper--${danger ? "danger" : variant}`;

  return (
    <div className="inputer">
      {label && <label className={upper_classes}>{label}</label>}
      <input
        type={type}
        className={classes}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

export default Inputs;

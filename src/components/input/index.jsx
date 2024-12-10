import { useState } from "react";
import "./index.css";

function Input(props) {
  const {
    type = "text",
    variant = "usual",
    placeholder = "Enter name",
    defaultValue = "",
    disabled = false,
    label = "",
    danger = false,
  } = props;

  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log("value changed")
  };

  const classes = `inputator inputator--${danger ? "danger" : variant}`;
  const upper_classes = `inputer-upper inputer-upper--${danger ? "danger" : variant}`;

  return (
    <div className="inputer">
      {label && <label className={upper_classes}>{label}</label>}
      <input
        className={classes}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        variant={variant}
      />
    </div>
  );
}

export default Input;

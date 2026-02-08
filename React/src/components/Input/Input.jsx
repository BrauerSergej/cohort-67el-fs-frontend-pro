import "./styles.css";

function Input({ name, type, placeholder, label }) {
  return (
    <div className="input_container">
      <label className="input_label">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="input_element"
      />
    </div>
  );
}

export default Input;
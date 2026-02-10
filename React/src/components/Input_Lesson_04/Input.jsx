import "./styles.css";

// function Input(props){
//   console.log(props);
//   const {id, name, type, placeholder, label} = props;

function Input({ id, name, type, placeholder, label }) {
  return (
    <div className="input_container">
      <label className="input_label" htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input_element"
      />
    </div>
  );
}

export default Input;
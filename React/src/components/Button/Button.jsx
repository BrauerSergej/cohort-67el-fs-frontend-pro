import "./styles.css";

// name в скобках по умолчанию
function Button({name = "Send"}) {
  return <button className="button_component">{name}</button>;
}

export default Button;

import "./styles.css";

// name в скобках по умолчанию
// здесь кнопка принимает "входные данные":
// name: текст, который будет написан на кнопке.
// type: технический атрибут.
function Button({name = "Send", type  = "button"}) {
  // type - значение переменной "button" или "submit" по умолчанию "button"
  return <button type={type}className="button_component">{name}</button>;
}

export default Button;
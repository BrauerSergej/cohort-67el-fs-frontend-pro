import "./styles.css";

// name в скобках по умолчанию
// здесь кнопка принимает "входные данные":
// name: текст, который будет написан на кнопке.
// type: технический атрибут.
// onClick - можно назвать как хотим в скобках - это значение по умолчанию onClick = () => {} если мы передали функцию в LoginForm то она будет приоритетнее - можно довавить в скобки - отлавливаем этот props
function Button({ name = "Send", type = "button", onClick }) {
  // type - значение переменной "button" или "submit" по умолчанию "button"
  // Что возвращает компонент Button ту же самую кнопку тот же самы html button
  return (
    <button type={type} className="button_component" onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;

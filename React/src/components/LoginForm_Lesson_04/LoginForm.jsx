import "./styles.css";
import Button from "../Button_Lesson_04/Button";
import Input from "../Input_Lesson_04/Input";

function LoginForm() {
  /* Первый шаг получаем id через querySelector - получаем доступ к этой кнопки
  const CLICK_ME_BUTTON = document.querySelector("#clickme_button");

  Второй шаг создаём function которая должна выводить что-то в консоль
  const login = () => {
  console.log("login");
  };
  Затем через кнопку которую мы имеем используем addEventListener
  который принимает в скобках два аргумента 1. Событие которое должно произойти а именно "click" а 2. Функция которая должна произойти на клик на кнопку. Вот таким образом мы добавляли раньше события.
  CLICK_ME_BUTTON.addEventListener("click", login);*/

  // С передачей аргументов
  // const login = (message) => {
  //   console.log("Button login works!!!");
  //   alert(message);
  // };

  // Без передачи аргументов
  // объект event в реакте он называется синтетик event 
  // event - это объект с описанием события которое произошло 
  const login = (event) => {
    // Функция preventDefault предотвращает стандартное действие браузера в различных html элементов
    event.preventDefault();
    console.log("Button login works!!!");
  };

  return (
    <form onSubmit={login} className="login_form">
      <h2 className="form_title">Login form</h2>
      <Input
        id="email-id"
        label="Email"
        type="email"
        placeholder="Enter your email"
        name="email"
      />
      <Input
        id="password-id"
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
      />
      {/*При клике на Button с type="submit" у нас запусается onSubmit={login} - в фигруные скобки передаём функцию*/}
      <Button name="Login" type="submit" />
      {/*Мы передаём компоненту через props эту функцию в Button добавляем onClick={login}*/}
      {/* <Button onClick={login} name="Login"/> */}
      {/*Старый способ через javascript */}
      {/* <button id="clickme_button" type="button">Login</button> */}
      {/*В качестве props можно передать ту функцию которую он должен выполнить*/}
      {/*Без передачи аргументов функции login*/}
      {/* <button onClick={login} type="button">Login</button> */}
      {/*С передачей аргументов функции login - в круглых скобках передаём аргумент*/}
      {/* <button
        onClick={() => login("Hello from argument of function login")}
        type="button"
      >
        Login
      </button> */}
    </form>
  );
}

export default LoginForm;

import { useState } from "react";
import { v4 } from "uuid";
import Button from "../../components/Button_Lesson_04/Button";

import "./styles.css";

function Lesson_05() {
  const [order, setOrder] = useState([]); // изначально пустой массив [] => когда нажимаем на кнопку Burger ["Burger", "Fries"]

  // Можно использовать функции по отедельности для каждой кнопки, и это будет работать
  // Но код однотипный и намного удобнее и компактнее использовать универсальную функцию addMenuElement
  // в которую мы будем передавать нужный элемент заказа
  // const addBurger = () => {
  //   setOrder((prevValue) => {
  //     // ...prevValue нужно скопировать все значения которые лежали в prevValue
  //     return [...prevValue, "Burger"];
  //   });
  // };

  // const addFries = () => {
  //   setOrder((prevValue) => {
  //     return [...prevValue, "Fries"];
  //   });
  // };

  // const addCola = () => {
  //   setOrder((prevValue) => {
  //     return [...prevValue, "Cola"];
  //   });
  // };

  const menuItems = [
    "Burger",
    "Fries",
    "Cola",
    "Salad",
    "Ketchup",
    "Ice-cream",
  ];

  const addMenuElement = (menuEl) => {
    setOrder((prevValue) => {
      return [...prevValue, menuEl];
    });
  };

  // console.log("Order", order);

  // map() JSX
  // ["Burger", "Fries"] => [<li>Burger</li>, <li>Fries</li>]
  const finalOrder = order.map((orderEl) => {
    // console.log(v4());
    return <li key={v4()}>{orderEl}</li>;
  });
  // console.log("Final order", finalOrder);

  const menuButtons = menuItems.map((item) => {
    return (
      <div className="button_control" key={v4()}>
        <Button name={item} onClick={() => addMenuElement(item)} />
      </div>
    );
  });

  return (
    <div className="lesson_05_wrapper">
      <div className="menu_wrapper">
        <h1 className="menu">Menu:</h1>
        <div className="button_wrapper">{menuButtons}</div>
      </div>
      <div className="order_wrapper">
        <p className="order_title">Your Order:</p>
        <ol className="order_list">{finalOrder}</ol>
      </div>
    </div>
  );
}

export default Lesson_05;

// ШАГ 1: Импортируем функцию хук useState из библиотеки react
import { useState } from "react";

import Button from "../Button_Lesson_04/Button";

import "./styles.css";

function Counter() {
  // При старом способе компонент Counter не перезагружается и не может показать на странице актуальное значения переменных
  // let count = 0;
  // console.log("Count in Component:", count);
  // const onMinus = () => {
  // count--;
  //   count = count - 1;
  //   console.log("Count in onMinus function:", count);
  // };
  // const onPlus = () => {
  // count++;
  //   count = count + 1;
  // console.log("Count in onPlus function:", count);
  // };

  // 1 элемент массива state - это состояние которое мы планируем изменять и показывать на экране(наш счётчик count)
  // 2 элемент - это функция, котрая изменяет наше состояние(то есть 1 элемент массива)
  // const state = useState(0);
  // console.log(state);
  // console.log(state[0]);
  // console.log(state[1]);

  //!!! ИЗМЕНЕНИЕ count МОЖЕТ БЫТЬ ТОЛЬКО С ИСПОЛЬЗОВАНИЕМ ФУНКЦИИ setCount
  // Когда нам нужно запоминать предидущее значение
  const [count, setCount] = useState(0);
  // console.log(count);
  // console.log(setCount);
  console.log("Count in Component:", count);

  const onMinus = () => {
    setCount((prevValue) => {
      return prevValue - 1;
    });
  };

  const onPlus = () => {
    setCount((prevValue) => {
      return prevValue + 1;
    });
  };
  // Когда нам не нужно запоминать предидущее значение
  // const [fullName, setFullName] = useState("John Jonson");
  // const changeName = () => {
  //   setFullName("Brat Pitt");
  // };

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      {/* <p className="count">{fullName}</p> */}
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
      {/* <div className="button_control">
        <Button name="Change name" onClick={changeName} />
      </div> */}
    </div>
  );
}

export default Counter;

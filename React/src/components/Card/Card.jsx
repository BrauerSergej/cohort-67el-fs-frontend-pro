import "./styles.css";

// props - это объект изначально он пустой - передавать в круглые скобки можно что угодно но принято писать props
// props - это возможность передавать данные из родительского компонента в дочерний
// Синтаксис без деструктуризации
// function SimpsonCard(props) {
// console.log(props);
// Синтаксис с деструктуризацией
// Более предпочтительный
function Card({ avatar, firstName, lastName, age, job, hobby }) {
  // Данные хранятся в самом компоненте, это старый подход
  // const homer = {
  //   avatarUrl:
  //     "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  //   firstName: "Homer",
  //   lastName: "Simpson",
  //   age: 39,
  //   job: "Safety Inspector",
  //   hobbies:
  //     "Bowling, watching TV, hanging out with friends (often at a tavern)",
  // };

  // // В этих константах содержатся все значения
  // const { avatarUrl, firstName, lastName, age, job, hobby } = homer;

  return (
    <div className="card">
      <h2 className="card_title">USER</h2>
      <img className="avatar" src={avatar} alt="Homer Simpson" />
      <p className="desc">
        <span className="info">Fullname: </span>
        {`${firstName} ${lastName}`}
      </p>
      <p className="desc">
        <span className="info">Age: </span>
        {age}
      </p>
      <p className="desc">
        <span className="info">Job: </span>
        {job}
      </p>
      <p className="desc">
        <span className="info">Hobbies: </span>
        {hobby}
      </p>
    </div>
  );
}

export default Card;

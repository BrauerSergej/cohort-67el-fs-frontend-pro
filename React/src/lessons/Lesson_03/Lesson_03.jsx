import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

import "./styles.css";

function Lesson_03() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    age: 40,
    job: "Nuclear Security Specialist",
    hobby: "Bear, TV, FastFood",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };

  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    age: 38,
    job: "No Job",
    hobby: "coocking",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
  };

  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    age: 10,
    job: "No job",
    hobby: "Skate",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };

  return (
    <div className="wrapper">
      <h2 className="homework_title">Classwork 03 - Profile Cards</h2>
      <div className="cards_container">
        <Card
          firstName={homerSimpson.firstName}
          lastName={homerSimpson.lastName}
          age={homerSimpson.age}
          job={homerSimpson.job}
          hobby={homerSimpson.hobby}
          avatar={homerSimpson.avatarURL}
          // userData={homerSimpson}
        />
        <Card
          firstName={margeSimpson.firstName}
          lastName={margeSimpson.lastName}
          age={margeSimpson.age}
          job={margeSimpson.job}
          hobby={margeSimpson.hobby}
          avatar={margeSimpson.avatarURL}
        />
        <Card
          firstName={bartSimpson.firstName}
          lastName={bartSimpson.lastName}
          age={bartSimpson.age}
          job={bartSimpson.job}
          hobby={bartSimpson.hobby}
          avatar={bartSimpson.avatarURL}
        />
      </div>
      <div className="button_control">
        <Button name="Send" type="submit"/>
      </div>
      <div className="button_control">
        <Button name="Sign up" type="submit"/>
      </div>
      <div className="button_control">
        <Button name="Log in" type="submit"/>
      </div>
    </div>
  );
}

export default Lesson_03;

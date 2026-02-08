import "./Card.css";

function Card() {
  const homer = {
    avatarUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    firstName: "Homer",
    lastName: "Simpson",
    age: 39,
    job: "Safety Inspector",
    hobbies:
      "Bowling, watching TV, hanging out with friends (often at a tavern)",
  };

  return (
    <div className="card">
      <h2 className="card_title">USER</h2>
      <img className="avatar" src={homer.avatarUrl} alt="Homer Simpson" />
      <p className="desc">
        <span className="info">Fullname: </span>
        {`${homer.firstName} ${homer.lastName}`}
      </p>
      <p className="desc">
        <span className="info">Age: </span>
        {homer.age}
      </p>
      <p className="desc">
        <span className="info">Job: </span>
        {homer.job}
      </p>
      <p className="desc">
        <span className="info">Hobbies: </span>
        {homer.hobbies}
      </p>
    </div>
  );
}

export default Card;

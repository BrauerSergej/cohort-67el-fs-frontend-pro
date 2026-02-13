import "./styles.css";
import Button from "../Button_Lesson_04/Button";
import { useState } from "react";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [disLikes, setDislikes] = useState(0);

  const handleLike = () => setLikes((prevValue) => prevValue + 1);
  const handleDislike = () => setDislikes((prevValue) => prevValue + 1);

  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback_container">
        <h2>Feedback</h2>
      <div className="feedback_buttons">
        <div className="feedback_item">
          <Button name="Like" onClick={handleLike} />
          <span className="count">{likes}</span>
        </div>
        <div className="feedback_item">
          <Button name="Dislike" onClick={handleDislike} />
          <span className="count">{disLikes}</span>
        </div>
      </div>
      <div className="reset_container">
        <Button name="Reset" onClick={handleReset} />
      </div>
    </div>
  );
}

export default Feedback;

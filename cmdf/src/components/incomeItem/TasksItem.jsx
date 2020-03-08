import React from "react";
import "./TaskItem.css";

const TaskItem = props => {
    const { mission } = props;
    return (
        <div className="myTask"> 
         <div className="myQuiz"> Quiz</div>
         <div className="myMission"> Mission</div>
        </div>
    );

};
export default TaskItem;
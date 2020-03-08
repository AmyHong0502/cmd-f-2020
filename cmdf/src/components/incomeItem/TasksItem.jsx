import React from "react";
import "./TaskItem.css";

const TaskItem = props => {
    const { mission } = props;
    return (
        <div className="myTask"> 
         <div className="myQuiz">:   Daily Quiz   :</div>
         <div className="myMission"> Daily Mission</div>
        </div>
    );

};
export default TaskItem;
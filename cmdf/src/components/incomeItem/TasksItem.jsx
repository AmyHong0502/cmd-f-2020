import React from "react";
import Button from "@material-ui/core/Button";
import "./TaskItem.css";

const quizzes = [
    { Q: 'A business firm tries to maximise its profits', A: 'T' },
    { Q: 'Unearned Revenue is Asset account', A: 'T' },
    { Q: 'The interest rate is applied on yearly', A: 'T' },
    { Q: 'Monopoly is when there is a single buyer', A: 'F' },
    { Q: 'Saving account is for sending money', A: 'F' },
];

const TaskItem = props => {
    const { mission, popQuiz } = props;
    return (
        <div className="myTask">
            <Button className="myQuiz" onClick={() => popQuiz(quizzes)}>Daily Quiz</Button>
            <Button className="myMission" onClick={() => popQuiz(quizzes)}>Daily Mission</Button>
            {/* <div className="myMission"> Daily Mission</div> */}
        </div>
    );

};
export default TaskItem;

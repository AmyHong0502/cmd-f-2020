import React from "react";
import "./IncomeItem.css";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  input: {
    display: "none"
  }
}));

const IncomeItem = props => {
  const { task, amount } = props;
  return (
    <div className="myIncomestff">
      <p className="taskItem"> {task} </p>
      <div className="amountItem">
        ${amount}
        <div>
          <IconButton htmlFor="text-button-file">
                   <CreateIcon/>   </IconButton>
        </div>
      </div>
    </div>
  );
};

export default IncomeItem;
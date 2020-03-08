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

const ExpenseItem = props => {
    const { name, spend } = props;
    return (
      <div className="myIncomestff">
        <p className="taskItem"> {name} </p>
        <div className="amountItem">
          ${spend}
          <div>
            <IconButton htmlFor="text-button-file">
            <CreateIcon/>   </IconButton>
          </div>
        </div>
      </div>
    );
  };
  
  export default ExpenseItem;
  

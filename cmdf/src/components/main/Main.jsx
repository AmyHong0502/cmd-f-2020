import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ContainedCardHeader from "./Card";
import IncomeItem from "../incomeItem/IncomeItem";
import ExpenseItem from "../incomeItem/ExpenseItem";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    padding: theme.spacing(8)
  },
  paper: {
    height: 140
  }
}));


const quizzes = [
  {
    checkin: "Do you know interest rate is yearly based?",
    mission: ["Sell unwanted clothes"],
    quizzes: [
      {
        problem: "A business firm tries to maximise its profits",
        answer: "T"
      },
      {
        problem: "Unearned Revenue is Asset account",
        answer: "T"
      }
    ]
  }
];
const incomes = [
  { task: "collect changes", amount: 20 },
  { task: "do housework", amount: 15 }
];
const expenses = [
  { name: "buy math textbook", spend: 100 },
  { name: "buy a hoodie", spend: 50 }
];

export default function Main() {
  const classes = useStyles();

  return (
    <main>
      <Paper className={classes.cardGrid}>
        <Grid container justify="center" spacing={8}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Income</Typography>
            <Paper className={classes.paper}>
              {incomes.map(({ task, amount }) => (
                <IncomeItem task={task} amount={amount} />
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Expense</Typography>
            <Paper className={classes.paper}>
              {expenses.map(({ name, spend }) => (
                <ExpenseItem name={name} spend={spend}/>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Mission</Typography>
            <Paper className={classes.paper}>
              {quizzes.map(({ mission }) => (
                <ContainedCardHeader mission={mission} />
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </main>
  );
}

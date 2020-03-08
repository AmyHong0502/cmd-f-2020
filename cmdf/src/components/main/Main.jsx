import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MainAppBar from "../navigation/AppBar";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    padding: theme.spacing(8),
  },
  paper: {
    height: 140,
  },
}));

const cards = ['Income', 'Expense', 'Tasks'];

export default function Main() {
  const classes = useStyles();

  return (
    <main>
      <MainAppBar />
      <Paper className={classes.cardGrid}>
        <Grid container justify="center" spacing={8}>
          {cards.map((card, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Typography variant="h6">{card}</Typography>
              <Paper className={classes.paper}></Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </main>
  );
}

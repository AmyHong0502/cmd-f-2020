import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Main() {
  const classes = useStyles();

  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              Lorem ipsum dolor sit amet
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

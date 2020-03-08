import React from "react";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import FilterDramaRoundedIcon from '@material-ui/icons/FilterDramaRounded';
import Fab from '@material-ui/core/Fab';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Slide from '@material-ui/core/Slide';
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "./Dialog";
import AppBar from "./AppBar";
import Assets from "./assets/Assets";
import History from "./history/History";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    padding: theme.spacing(8),
  },
  fab: {
    position: 'fixed',
    right: 30,
    bottom: 30,
  },
  paper: {
    height: 140,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Main(props) {
  const classes = useStyles();
  const [up, setUp] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [incomeOpen, setIncomeOpen] = React.useState(false);
  const [expenseOpen, setExpenseOpen] = React.useState(false);
  const [tasksOpen, setTasksOpen] = React.useState(false);

  const toggleUp = () => setUp(!up);

  const handleIncomeOpen = () => setIncomeOpen(true);

  const handleExpenseOpen = () => setExpenseOpen(true);

  const handleTasksOpen = () => setTasksOpen(true);

  const handleIncomeClose = () => setIncomeOpen(false);

  const handleExpenseClose = () => setExpenseOpen(false);

  const handleTasksClose = () => setTasksOpen(false);

  const handleSelectedTab = index => setSelectedTab(index);

  const cards = [
    {
      title: 'Income',
      open: incomeOpen,
      handleClose: handleIncomeClose,
    },
    {
      title: 'Expense',
      open: expenseOpen,
      handleClose: handleExpenseClose,
    },
    {
      title: 'Tasks',
      open: tasksOpen,
      handleClose: handleTasksClose,
    },
  ];

  const Content = (props) => {
    const { selectedTab } = props;

    switch (selectedTab) {
      case 0:
        return <Grid container justify="center" spacing={8}>
          {cards.map((card, i) => (
            <Grid item key={i} xs={12} sm={6} md={4}>
              <Typography variant="h6">{card.title}</Typography>
              <Paper className={classes.paper}></Paper>
            </Grid>
          ))}
        </Grid>;
      case 1:
        return <Assets />;
      case 2:
        return <History />;
      default:
        return <div></div>;
    }
  };

  return (
    <main>
      <AppBar handleSelectedTab={handleSelectedTab} />
      <Paper className={classes.cardGrid}>
        <Content selectedTab={selectedTab} />
      </Paper>
      <Fab className={classes.fab} color="primary" aria-label="add" onClick={toggleUp}>
        <AddRoundedIcon />
      </Fab>
      <Slide direction="up" in={up} mountOnEnter unmountOnExit>
        <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleIncomeOpen} style={{ bottom: 240 }}>
          <FilterDramaRoundedIcon />
        </Fab>
      </Slide>
      <Slide direction="up" in={up} mountOnEnter unmountOnExit>
        <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleExpenseOpen} style={{ bottom: 170 }}>
          <AssignmentTurnedInRoundedIcon />
        </Fab>
      </Slide>
      <Slide direction="up" in={up} mountOnEnter unmountOnExit>
        <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleTasksOpen} style={{ bottom: 100 }}>
          <AttachMoneyRoundedIcon />
        </Fab>
      </Slide>
      {
        cards.map((card, i) => (
          <Dialog key={i} open={card.open} handleClose={card.handleClose} Transition={Transition} type={card.title} />
        ))
      }
    </main >
  );
}

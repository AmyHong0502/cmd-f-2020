import React from 'react';
import Grid from '@material-ui/core/Grid';
import './TaskItem.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    flexGrow: 1,
    justifyContent: 'space-between'
  }
}));

const TaskItem = props => {
  const { mission } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.header}>
      <Grid
        item
        xs={5}
        style={{ margin: '8px', padding: '-10px;' }}
        className='myQuiz'
      >
        Daily Quiz
      </Grid>
      <Grid
        item
        xs={5}
        style={{ margin: '8px', padding: '-10px' }}
        className='myMission'
      >
        Daily Mission
      </Grid>
    </Grid>
  );
};

export default TaskItem;

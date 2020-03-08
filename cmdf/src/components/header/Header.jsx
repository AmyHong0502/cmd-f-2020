import React from 'react';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import ProgressChart from '../navigation/ProgressChart';
import ProgressBar from '../progressBar/ProgressBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  header: {
    flexGrow: 1,
    padding: theme.spacing(8),
    justifyContent: 'space-between'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  profile: {
    display: 'flex'
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: props.open
      })}
    >
      <Grid container className={classes.header} spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={classes.profile}>
            <div
              style={{ width: 150, height: 150, border: '5px solid #ddd' }}
            />
            <div style={{ margin: '10px 20px' }}>
              <Avatar style={{ background: '#3f51b5' }}>
                {props.username.charAt(0).toUpperCase()}
              </Avatar>
              <Typography>
                @{props.username.split('id.blockstack')} • Level 1 Warrior
              </Typography>
              <ProgressBar percentage={props.percentage} />
              <ProgressBar percentage={props.percentage} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <ProgressChart />
        </Grid>
      </Grid>
    </div>
  );
}

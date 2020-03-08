import React, { useEffect }  from 'react';
import clsx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import ProgressChart from '../navigation/ProgressChart';
import ProgressBar from '../progressBar/ProgressBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import dratini1 from '../../assets/Dratini1.gif';
import dratini2 from '../../assets/Dratini2.gif';
import dratini3 from '../../assets/Dratini3.gif';
import pikachu1 from '../../assets/Pikachu1.gif';
import pikachu2 from '../../assets/Pikachu2.gif';
import pikachu3 from '../../assets/Pikachu3.gif';
import squirtle1 from '../../assets/Squirtle1.gif';
import squirtle2 from '../../assets/Squirtle2.gif';
import squirtle3 from '../../assets/Squirtle3.gif';
import firebase from '../../firebase';

const gifs = [
  dratini1, dratini2, dratini3,
  pikachu1, pikachu2, pikachu3,
  squirtle1, squirtle2, squirtle3,
];

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
  const [avatar, setAvatar] = React.useState(pikachu2);
  const usersRef = firebase.database().ref("user/"+props.username);
  useEffect(() => {
    usersRef.on('value', snapshot => {
      if(snapshot.val()!= null)
       {setAvatar(snapshot.val().avatar);}
    });
  }, []);

  return (
    <div
      className={clsx(classes.content, {
        [classes.contentShift]: props.open
      })}
    >
      <Grid container className={classes.header} spacing={2}>
        <Grid item xs={12} s={6} md={6}>
          <div className={classes.profile}>
            <div
              style={{ width: 150, height: 150, border: '5px solid #ddd', display: 'flex' }}>
                <img src={gifs[avatar]} style={{
                        margin: 'auto',
                        alignSelf: 'center'
                    }} />
              </div>
            <div style={{ margin: '10px 20px' }}>
              <Avatar style={{ background: '#3f51b5' }}>
                {props.username.charAt(0).toUpperCase()}
              </Avatar>
              <Typography>
                @{props.username} • Level 1 Warrior
              </Typography>
              <ProgressBar percentage={props.percentage} />
              <ProgressBar percentage={props.percentage} />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} s={6} md={6}>
          <ProgressChart />
        </Grid>
      </Grid>
    </div>
  );
}

import React from "react";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ProgressChart from '../navigation/ProgressChart';
import firebase from '../../firebase';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(8),
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  profile: {
    display: 'flex',
  },
}));

const icons = [
  { name: 'Dashboard', icon: 'dashboard_rounded' },
  { name: 'Assets', icon: 'emoji_events_rounded' },
  { name: 'History', icon: 'equalizer_rounded' },
];

const ProgressBar = (props) => {
  return (
    <div style={{ display: 'flex', margin: '10px 0', }}>
      <div style={{
        position: 'relative',
        height: 20,
        width: 350,
        borderRadius: 50,
        border: '1px solid #333',
      }}>
        <Bar percentage={props.percentage} />
      </div>
      <Typography style={{ fontSize: '0.9rem', marginLeft: 10 }}>{`${props.percentage}/100`}</Typography>
    </div>
  )
}

const Bar = (props) => {
  return <div style={{ width: `${props.percentage}%`, height: '100%', transition: 'width .2s ease-in', background: 'orange', borderRadius: 'inherit' }} />
}

export default function MainAppBar({ userSession = "No User", handleSignOut, selectedTab, handleSelectedTab }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [percentage, setPercentage] = React.useState(60);
  const username =
    userSession.loadUserData().username == undefined
      ? "No User"
      : userSession.loadUserData().username;
  const quizref = firebase.database().ref("quiz");
  quizref.on("value", snapshot => {
    console.log(snapshot.val());
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" noWrap className={classes.title}>
            {icons[selectedTab].name}
          </Typography>
          <IconButton>
            <Icon className="fas fa-coins" style={{ color: 'orange' }} />
          </IconButton>
          <Typography variant="h6" style={{ marginRight: 12 }} noWrap>
            250
          </Typography>
          <IconButton>
            <Icon className="fas fa-wallet" style={{ color: 'orange' }} />
          </IconButton>
          <Typography variant="h6" noWrap>
            $200.00
          </Typography>
          <Button variant="outlined" onClick={handleSignOut} style={{ borderColor: 'white', color: 'white', fontSize: '1rem', marginLeft: 30 }}>Sign Out</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <List>
          {icons.map((icon, i) => (
            <ListItem button key={icon.name} onClick={() => handleSelectedTab(i)}>
              <ListItemIcon>
                <Icon>{icon.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={icon.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.header}>
          <div className={classes.profile}>
            <div style={{ width: 150, height: 150, border: '5px solid #ddd' }} />
            <div style={{ margin: '10px 20px', }}>
              <Avatar style={{ background: '#3f51b5' }}>{username.charAt(0).toUpperCase()}</Avatar>
              <Typography>@{username.split("id.blockstack")} • Level 1 Warrior</Typography>
              <ProgressBar percentage={percentage} />
              <ProgressBar percentage={percentage} />
            </div>
          </div>
          <ProgressChart />
        </div>
      </div>
    </div>
  );
}

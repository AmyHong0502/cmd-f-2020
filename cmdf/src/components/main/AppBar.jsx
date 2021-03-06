import React, { useEffect } from "react";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
import firebase from '../../firebase';
import Header from '../header/Header';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  title: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  icon: {
    marginRight: theme.spacing(2)
  }
}));

const icons = [
  { name: 'Dashboard', icon: 'dashboard_rounded' },
  { name: 'Assets', icon: 'emoji_events_rounded' },
  { name: 'History', icon: 'equalizer_rounded' }
];

export default function MainAppBar({
  userSession = 'No User',
  handleSignOut,
  selectedTab,
  handleSelectedTab
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [percentage, setPercentage] = React.useState(60);
  const [gem, setGem] = React.useState('0');
  const [money, setMoney] = React.useState('0');
  const username =
    userSession.loadUserData().username == undefined
      ? "No User"
      : userSession.loadUserData().username.substring(0, userSession.loadUserData().username.length - 14);
  const quizref = firebase.database().ref("quiz");
  quizref.on("value", snapshot => {
    console.log(snapshot.val());
  });
  const usersRef = firebase.database().ref("user/"+username);
  useEffect(() => {
    usersRef.on('value', snapshot => {
      if(snapshot.val()!= null)
       {setMoney(snapshot.val().money);
        setGem(snapshot.val().gem);}
    });
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component='h1'
            variant='h6'
            noWrap
            className={classes.title}
          >
            {icons[selectedTab].name}
          </Typography>
          <IconButton>
            <Icon className='fas fa-gem' style={{ color: 'orange' }} />
          </IconButton>
          <Typography variant='h6' style={{ marginRight: 12 }} noWrap>
            {gem}
          </Typography>
          <IconButton>
            <Icon className='fas fa-wallet' style={{ color: 'orange' }} />
          </IconButton>
          <Typography variant='h6' noWrap>
            ${money}
          </Typography>
          <Button
            variant='outlined'
            onClick={handleSignOut}
            style={{
              borderColor: 'white',
              color: 'white',
              fontSize: '1rem',
              marginLeft: 30
            }}
          >
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <List>
          {icons.map((icon, i) => (
            <ListItem
              button
              key={icon.name}
              onClick={() => handleSelectedTab(i)}
            >
              <ListItemIcon>
                <Icon>{icon.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={icon.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Header open={open} percentage={percentage} username={username} />
    </div>
  );
}

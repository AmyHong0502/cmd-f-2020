import React from "react";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Badge from '@material-ui/core/Badge';
import Fab from '@material-ui/core/Fab';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import RedeemRoundedIcon from '@material-ui/icons/RedeemRounded';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 300;

const icons = [
  { name: 'Dashboard', icon: 'dashboard_rounded' },
  { name: 'Assets', icon: 'emoji_events_rounded' },
  { name: 'History', icon: 'equalizer_rounded' },
];

const useStyles = makeStyles(theme => ({
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
  fab: {
    position: 'fixed',
    right: '30px',
    bottom: '30px',
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
  taskBoard: {
    display: 'flex',
  },
  taskColumn: {
    borderRadius: '24px',
    flexGrow: 1,
    margin: '24px',
    height: '300px',
    background: '#ddd',
  },
  task: {},
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    // padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  icon: {
    marginRight: theme.spacing(2)
  }
}));

export default function MainAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
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
            Dashboard
          </Typography>
          <IconButton>
            <FavoriteRoundedIcon style={{ color: 'orange' }} />
          </IconButton>
          <Typography variant="h6" style={{ marginRight: '12px' }} noWrap>
            250
          </Typography>
          <IconButton>
            <RedeemRoundedIcon style={{ color: 'orange' }} />
          </IconButton>
          <Typography variant="h6" noWrap>
            200.00
          </Typography>
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
            <ListItem button key={icon.name}>
              <ListItemIcon>
                <Icon>{icon.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={icon.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div
        className={clsx(classes.heroContent, {
          [classes.contentShift]: open,
        })}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
          justifyContent: 'flex-end',
        }}>
          <div style={{ width: '150px', height: '150px', border: '1px solid' }}></div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
}));

export default function Assets() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {Array(12).fill(0).map((item, i) =>
                <Paper style={{ padding: 50, margin: 50 }} elevation={4}>
                    <Icon className="fas fa-coins"></Icon>
                </Paper>
            )}
        </div >
    );
}

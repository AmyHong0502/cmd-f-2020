import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Paper from '@material-ui/core/Paper';
import dratini1 from '../../../assets/Dratini1.gif';
import dratini2 from '../../../assets/Dratini2.gif';
import dratini3 from '../../../assets/Dratini3.gif';
import pikachu1 from '../../../assets/Pikachu1.gif';
import pikachu2 from '../../../assets/Pikachu2.gif';
import pikachu3 from '../../../assets/Pikachu3.gif';
import squirtle1 from '../../../assets/Squirtle1.gif';
import squirtle2 from '../../../assets/Squirtle2.gif';
import squirtle3 from '../../../assets/Squirtle3.gif';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
}));

const gifs = [
    dratini1, dratini2, dratini3,
    pikachu1, pikachu2, pikachu3,
    squirtle1, squirtle2, squirtle3,
];

export default function Assets() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {Array(9).fill(0).map((item, i) =>
                <Paper key={i} style={{
                    width: 200,
                    height: 200,
                    margin: 50,
                    display: 'flex',
                }} elevation={4}>
                    <img src={gifs[i]} style={{
                        margin: 'auto',
                        alignSelf: 'center'
                    }} />
                </Paper>
            )}
        </div >
    );
}

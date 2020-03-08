import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from './AssetsGrid';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function History() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid />
        </React.Fragment>
    );
}

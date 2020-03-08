import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Records from './RecordsTable';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function History() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Records />
        </React.Fragment>
    );
}

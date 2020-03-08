import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from './RecordsTable';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function History() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Table />
        </React.Fragment>
    );
}

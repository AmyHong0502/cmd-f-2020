import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(transaction, date, amount, category) {
    return { transaction, date, amount, category };
}

const rows = [
    createData('Buy textbook', 'March 7, 2020', 200.00, 24, 'School'),
    createData('Donate at the local Foodbank', 'March 7, 2020', 35.00, 'Donation'),
    createData('Eat out at Marutama Ramen', 'March 7, 2020', 12.35, 'Food'),
    createData('Grocery shopping at Save on Foods', 'March 7, 2020', 24.55, 'Food'),
    createData('Salary income', 'March 7, 2020', 1070.49, 'Income'),
];

export default function Records() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Transaction</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Amount (CAD)</TableCell>
                        <TableCell>Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell component="th" scope="row">
                                {row.transaction}
                            </TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{`$${row.amount}`}</TableCell>
                            <TableCell>{row.category}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

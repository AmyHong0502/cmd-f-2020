import React, { useEffect } from "react";
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Icon from '@material-ui/core/Icon';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    field: {
        marginBottom: 30,
    },
}));

const marks = Array(10).map((v, i) => ({ value: i * 10, label: `${i * 10}°C` }));

export default function CreateDialog({ type, open, handleClose, Transition }) {
    const classes = useStyles();

    useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="md" TransitionComponent={Transition} fullWidth keepMounted aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{`Create ${type}`}</DialogTitle>
            <DialogContent>
                <Typography>Title*</Typography>
                <TextField
                    className={classes.field}
                    autoFocus
                    required
                    margin="dense"
                    id="title"
                    variant="outlined"
                    fullWidth
                />
                <Typography>Notes</Typography>
                <TextField
                    className={classes.field}
                    id="standard-multiline-static"
                    variant="outlined"
                    multiline
                    rows="3"
                    fullWidth
                />
                <Typography>Reward</Typography>
                <Grid container spacing={1} alignItems="flex-end" className={classes.field}>
                    <Grid item>
                        <Icon className="fas fa-coins" />
                    </Grid>
                    <Grid item>
                        <TextField id="reward" type="number" />
                    </Grid>
                </Grid>
                <Typography gutterBottom>
                    How challenging is it?
                </Typography>
                <Slider
                    className={classes.field}
                    style={{ marginTop: 50 }}
                    defaultValue={80}
                    aria-labelledby="discrete-slider"
                    step={10}
                    marks={marks}
                    valueLabelDisplay="on"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
    );
}

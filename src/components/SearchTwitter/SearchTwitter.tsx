import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        marginTop: 5,
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 99,
        boxShadow: 'none',
        background: 'rgba(238, 243, 244, 1)',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
  }),
);

export const SearchTwitter = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search Twitter"
      />
    </Paper>
  );
}
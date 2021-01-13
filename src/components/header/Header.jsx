import { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { messages } from '../../utilities/Constants';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  p15: {
    paddingLeft: "15px"
  }
}))

function Header() {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Typography variant="h6" className={classes.p15}>{messages.heading}</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
}

export default Header
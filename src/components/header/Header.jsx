import { Fragment, cloneElement } from 'react';
import { makeStyles } from '@material-ui/styles';
import { messages } from '../../utilities/Constants';
import { AppBar, Toolbar, Typography, useScrollTrigger } from '@material-ui/core';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });
  return cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

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
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Typography variant="h6" className={classes.p15}>{messages.heading}</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
}

export default Header
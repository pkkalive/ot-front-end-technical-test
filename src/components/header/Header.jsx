import React from 'react';
import classes from './Header.module.scss'

function Header() {
  return (
    <header className={classes.heading}>
      <p className={classes.title}> EMBL Coding Challenge </p>
    </header>
  )
}

export default Header
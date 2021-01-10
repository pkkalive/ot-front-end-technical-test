import React from 'react';
import classes from './Footer.module.scss';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <span>@ Copyright Developer by Purushotham Kumar</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer;
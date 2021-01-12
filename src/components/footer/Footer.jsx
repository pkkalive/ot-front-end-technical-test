import classes from './Footer.module.scss';
import { titles } from '../../utilities/Constants';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <span>{titles.copyrights}</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer;
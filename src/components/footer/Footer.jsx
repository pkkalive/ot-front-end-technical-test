import classes from './Footer.module.scss';
import { messages } from '../../utilities/Constants';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <span>{messages.copyrights}</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer;
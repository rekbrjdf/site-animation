import { bindClasses } from 'utils/functions';
import SendForm from 'components/adaptive/SendForm';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'wrapper');

export default function Demo() {
  return (
    <main className={classes.wrapper}>
      <div className={bc['__first-screen']}>
        Interested in a Demo? Fill out the Form Below to Request a Demo!
      </div>
      <section className={bc['__send-form']}>
        <SendForm title="Demo Request Form" buttonName="Submit Request" demoRequest />
      </section>
    </main>
  );
}

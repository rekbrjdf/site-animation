import { bindClasses } from 'utils/functions';
import Counter from './counter';
import classes from './styles.module.scss';

const bc = bindClasses(classes, 'circles');
function Circles() {
  return (
    <div className={classes.circles}>
      <div className={bc.__circle} style={{ '--index': 1 }}>
        <Counter value={250} />
        <p>team members</p>
      </div>
      <div className={bc.__circle} style={{ '--index': 2 }}>
        <Counter value={6} />
        <p>live games </p>
      </div>
      <div className={bc.__circle} style={{ '--index': 4 }}>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <Counter value={2} />
          <span className={bc.__label}>M+</span>
        </div>
        <p>international playes</p>
      </div>
    </div>
  );
}

export default Circles;

import React from 'react';

import styles from './index.sass';
import spinner from './circles.svg';


const Spinner = props =>
    <div className={styles.spinner}>
        {console.info('spinning')}
        <img src={spinner} />
    </div>;

export default Spinner;

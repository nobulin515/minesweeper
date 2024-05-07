import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [samplePos,setSamplePos]=useState(0)
  console.log('sample',samplePos)

  return (
    <div className={styles.container} >
      <div className={styles.smpleStyle} style={{backgroundPosition: `${samplePos*-30}px 0px`}}> </div>
  <button onClick={()=>setSamplePos(p=>(p+1)%14)}>sample</button>
    </div>
  );
};


export default Home;

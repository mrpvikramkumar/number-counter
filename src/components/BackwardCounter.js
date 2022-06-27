import { useState, useEffect } from 'react';

import classes from '../components/BackwardCounter.module.css'
import Card from './Card';

const BackwardCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Card className={classes}>{counter}</Card>;
};

export default BackwardCounter;

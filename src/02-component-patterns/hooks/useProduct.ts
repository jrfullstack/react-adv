import {useState} from 'react';

export const useProduct = () => {

    const [counter, setCounter] = useState(0);

    const increaseBy = (value: number) => {
        // interesante para no bajar mas de 0
        setCounter(prev => Math.max(prev + value, 0))
    }
  return {
    counter,
    increaseBy
  }
}

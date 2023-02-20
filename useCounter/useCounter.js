import { useState } from "react"

export const useCounter = (initialValue = 1) => {

  const [counter, setCounter] = useState(initialValue);

  const increment = value => {
    counter < 100 ? setCounter((current) => current + value) : counter;
  };

  const decrement = value => {
    counter > 0 ? setCounter((current) => current - value) : counter;
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset
  }
}
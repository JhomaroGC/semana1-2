import React, {useState} from "react";
import PropTypes from 'prop-types'


const Counter = ({ value }) => {
    const [counter, setCounter] = useState(0)

  const handlerClickAdd = (event) => {
    event.preventDefault();
    setCounter(counter+1)    
    document.getElementById("add").innerHTML = counter ;
  };
  return (
    <>
      <h1>Contador App</h1>
      <h2 id="add">{counter}</h2>      
      <button type="button" onClick={handlerClickAdd}>
        +1
      </button>
      <h2>{counter}</h2>
    </>
  );
};

export default Counter;

Counter.propTypes = {
  value: PropTypes.number,
};
Counter.defaultProps = {
  value: 70,
};


import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({ value }) => {

  const [counter, setCounter] = useState(value)

  const handleClick =()=> {
    setCounter(counter + 1)
  }
  const handleResta =()=>{
    setCounter(counter - 1)
  }
  const handleReset=()=>{
    console.log(value)
    
    setCounter(value)
  }

  return (
    <>
      <h1> Counter App </h1>
      <h2> { counter } </h2>
      <button type='number' onClick={handleClick} >
        +1
      </button>
      <button type='number' onClick={handleResta} >-1</button>
      <button onClick={handleReset} >Reset</button>
    </>
  )

}
CounterApp.propTypes = {
  value : PropTypes.number.isRequired
  
}
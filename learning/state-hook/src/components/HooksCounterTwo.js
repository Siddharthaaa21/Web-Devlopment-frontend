import React, { useState } from 'react'

function HooksCounterTwo() {
  const initialCount = 0
  const [count, setcount] = useState(initialCount)

  return (
    <div>
      Count: {count}
      <button onClick={() => setcount(initialCount)}>Reset</button>
      <button onClick={() => setcount(prevcount=>prevcount + 1)}>Increase</button>

      <button onClick={() => setcount(prevcount=>prevcount -1)}>Decrease </button>
      {/* is unsave to do this way. we need to use second form of function have to use prev state funtion  */}
      {/* setCount(prevCount => prevCount (add or subtract!)) */}


    </div>
  )
}

export default HooksCounterTwo

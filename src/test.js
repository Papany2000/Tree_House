
import React from 'react'


function Test() {

  const [key, setkey] = React.useState();
  const keyDown = (event) => {
      setkey(event.key)
      console.log(event)
  }
  return (
    <div>
      <h2>Код решения</h2>
      <h1>GeeksforGeeks</h1>
      {key ? <h2>Pressed Key : {key}</h2> : null}
      <input type='text' onKeyDown={keyDown} placeholder='Press here...' />
    </div>
  )
}

export default Test;
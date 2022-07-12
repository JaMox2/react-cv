import { useState } from "react"

export default function UseStateTest() {
  let [text, setText] = useState('')
  return (
    <div>
        {/* <input type="text" onInput={(e)=>handleOnClick(e)}/> */}
        <input type="text" onInput={(e)=>setText(text = e.target.value)}/>
        <h1>{text}</h1>
    </div>
  )
}
  
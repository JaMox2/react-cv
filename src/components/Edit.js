import { useState } from "react"

export default function Edit({title, type, handleInput}) {
  function sendBackInput(e){
    handleInput(e, title)
  }
  return (
    <div className="edit-container">
      <span>{title}</span>
      <input type={type} onInput={(e)=>sendBackInput(e.target.value)}/>
      <button>Close Edit</button>
    </div>
  )
}

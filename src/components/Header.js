import { useState } from 'react'
import Edit from '../components/Edit'
import pfpImg from '../imgs/placeHolderImg.png'


export default function Header() {
  let [pfp, setPfp] = useState(`${pfpImg}`)
  let [isShowing, setIsShowing] =  useState(false)

  function handleInput(e, title){
    let elementChange = document.querySelector(`#${title}`)
    console.log(elementChange.firstChild)
    elementChange.firstChild.innerHTML = e
  }

  return (
    <div className="header">
      <div className="img-container">
        <img src={pfp} alt="pfp" />
        <div className="img-Hover">
          <label htmlFor="avatar">
            Select Image
            <input type="file" onChange={(e)=>setPfp(pfp = URL.createObjectURL(e.target.files[0]))} id="avatar" name="avatar" accept="image/png, image/jpeg"/>
          </label>
        </div>
      </div>
      <div className="name-container">
        <Edit title='Name' type='text' handleInput={handleInput}/>
        <h1 id='Name'>
          <span>Jeffrey Villamil</span>
          <button className='editBtn' onClick={()=>console.log('click One')}>Edit</button>
        </h1>
        <h2>
          Web Developer
          <button className='editBtn' onClick={()=>console.log('click Two')}>Edit</button>
        </h2>
      </div>
    </div>
  )
}   

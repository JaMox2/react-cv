import pfpImg from '../imgs/placeHolderImg.png'
import Edit from './Edit'

export default function Header() {
  return (
    <div className="header">
      <div className="img-container">
        <img src={pfpImg} alt="pfp" />
        <div className="img-Hover">
          <label htmlFor="avatar">
            Select Image
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg"/>
          </label>
        </div>
      </div>
      <div className="name-container">
        <h1>
          Jeffrey Villamil
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

// import { useState, useEffect } from "react"


// export default function UseEffectTest() {
//     let [text, setText] = useState('')
//     let [span, setSpan] = useState()
//     useEffect(()=>{
//         console.log('this ran')
//         setSpan(span + 1)
//     }, [text]) // Any time [text] changes it does this code block
//     function handleTextState(e){
//         console.log(e)
//         setText(text = e)
//     }
//     return (
//         <div>
//             {/* <input type="text" onInput={(e)=>handleOnClick(e)}/> */}
//             <input type="text" onInput={(e)=>handleTextState(e.target.value)}/>
//             <h1>{text}</h1>
//             <span>{span}</span>
//         </div>
//     )
// }    

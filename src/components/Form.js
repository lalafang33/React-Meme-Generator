import React from "react"
import "./Form.css"
import meme from "../memesData"

export default function Form() {

  function clicked() {

    const arr = meme.data.memes;
    const randomMeme = arr[Math.floor(Math.random() * arr.length)]
   
   console.log(randomMeme.id)

  }

  return(
    <div className="form-container">
        <form className="form-text">
          <input type="text" placeholder="shut up and "></input>
          <input type="text" placeholder="take my money"></input>
        </form>
      <button onClick={clicked} className="form-button">Get a New Meme Image 🖼 </button>

    </div>
  )
}
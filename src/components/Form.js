import {React, useState} from "react"
import "./Form.css"
import memes from "../memesData"

export default function Form() {
  // const [memeImage, setMemeImage]= useState("")

  const [meme, setMeme] = useState({
    topText: "", 
    bottomText: "", 
    randomImage:"http://i.imgflip.com/1bij.jpg"
  })

    // const arr = meme.data.memes;
    // const randomMeme = arr[Math.floor(Math.random() * arr.length)]
    // const memeUrl = randomMeme.url

  const [allMemeImages, setAllMemeImages] = useState(memes)


  function clicked() {
    const arr = allMemeImages.data.memes;
    const randomMeme = arr[Math.floor(Math.random() * arr.length)]
    const memeUrl = randomMeme.url
    // console.log(randomMeme.url)

    setMeme(prevState => ({
        ...prevState, 
        randomImage: memeUrl, 
      })
    )
  }

  return(
    <div className="form-container">
      <div className="form-text">
          <input type="text" placeholder="shut up and "></input>
          <input type="text" placeholder="take my money"></input>
      </div>
      <button 
        onClick={clicked} 
        className="form-button">Get a New Meme Image 🖼 </button>

      <img src={meme.randomImage} alt="randomly generate meme" />

    </div>
  )
}
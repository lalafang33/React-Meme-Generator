import {React, useState, useEffect} from "react"
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

  const [allMemeImages, setAllMemeImages] = useState([])


  function clicked() {
    // const arr = allMemeImages.data.memes;
    const randomNumber = [Math.floor(Math.random() * allMemeImages.length)]
    const memeUrl = allMemeImages[randomNumber].url
    // console.log(randomMeme.url)

    setMeme(prevState => ({
        ...prevState, 
        randomImage: memeUrl, 
      })
    )
  } 

  useEffect(function() {
    fetch(`https://api.imgflip.com/get_memes`)
    .then(res => res.json())
    .then(data => setAllMemeImages(data.data.memes))
  },[])

  // function clicked() {
  //   setMeme(prevState => ({
  //     ...prevState, 
  //     randomImage:
  //   }))
  // }

  function handleChange(event) {
    const {name, value} = event.target 

    setMeme(prevState => ({
      ...prevState,
      [name]: value, 
    }))

    event.preventDefault() 

    // setMeme(prevState => ({
    //   ...prevState,
    //   [name]: 
    // }))
  }


  console.log(meme)
  return(
    <div className="form-container">
      <div className="form-text">
          <input 
            type="text" 
            placeholder="shut up and "
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          ></input>
          <input 
            type="text" 
            placeholder="take my money"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          ></input>
      </div>
      <button 
        onClick={clicked} 
        className="form-button"
      >
         Get a New Meme Image 🖼 
      </button>

      <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  )
}
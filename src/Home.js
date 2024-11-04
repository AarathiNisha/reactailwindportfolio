import React from 'react'
import image from './assets/image.png'

function Home() {
  return (
    <div classname="Home.js">
    <center>
    <h1>Hi Welcome</h1>
    <br></br>
    <img src={image} classname='imagespace'/>
    </center>
    </div>
  )
}

export default Home
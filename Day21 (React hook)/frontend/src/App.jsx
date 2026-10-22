import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import First from './First'
import Second from './Second'
import Third from './Third'

function App() {
let item1 = "Dum biryani"
let img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGeQFh2LeaZT4JQNKJngB6HCVupzPJtk5oBoiGL_kkUA&s=10"
let item2 = "Pizza"
let img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS90TJVMTOxD9narFSLsQYsT_EvxNOZcGrhvE6vuXEM3g&s=10"
let item3 = "Chicken Shawarma"
let img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3DloUz1p25J_rUwDvPewqE-fzza-UnpeM0iG8woUIA&s=10"
let item4 = "Pani Puri"
let img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0gg0ZkidaDUvSGytQcZCa8V4P2ttA2Q_81_m8FlkXg&s=10"
  return (
    <>
      <Second itemName = {item1} itemImg = {img1}></Second>
      <Second itemName = {item2} itemImg = {img2}></Second>
      <Second itemName = {item3} itemImg = {img3}></Second>
      <Second itemName = {item4} itemImg = {img4}></Second>
    </>
  )
}

export default App

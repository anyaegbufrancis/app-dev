import React from 'react';
import './Stuff.css'; 
import {useDispatch, useSelector } from "react-redux"

const Stuff = () => {
  const imageUrl = require("../images/ony.png"); 
  const pagename = useSelector((state) => state.changeState.pagename)

  const poemLines = [
    "Beautiful Onyinye,",
    'In the tapestry of stars, your beauty is etched',
    'A melodious symphone of affection, you got me smitten',
    'As the sunset painting across the sky,',
    "You've got me wobbling asky",

    "Your eyes, like galaxies, sparkling bright",
    "Guiding me through this enchanting delight",
    "In your smile, you got me hypnotized",
    "A true symphony of joy, I am endlessly mesmerized",

    "Soft whispers of love, like a gentle breeze",
    "Carresing our souls, putting us at ease",
    "Hard to imagine the warmth your touch will elicit",
    "A tender embrace, I wish to emit",

    'I yearn you firmly close to my arms',
    'I yearn to make you dance to the sound of my lips',
    'I yearn to experience the depths of your warmth',
    'I yearn to spread you apart… gently in one breadth',

    'I desire to leave a mark in your heart',
    'I desire to watch you get drunk in desire, love heat',
    'I desire to experience every inch of you',
    'I desire to pull you close to me to feel your heartbeat fast',

    "I can't wait to remind you of how beautiful you are",
    "I can't wait to stare deep into your eyes and feel your breasts on my chest like a temple",
    "I can't wait to show you the love you truly deserve",
    "I can't wait to stare into your soul as our hearts throb in wild affection",

    'Let me get lost in between your thighs, head first, I can dare',
    'And when you hit the cliff… I want to clean you up and wrap you in warm stare',
    'I would like to say Sweet nothings to you, nothing akin',
    'As I stroke your hair and have my fingers take a journey through your skin',

    'This, babygirl, is your safe space', 
    'Just know that I am here to appreciate what an amazing woman you are',
    'So if that is ok with you… I would like to ask that you be my sweet Valentine!',

                    "- Francis"
  ];

  return (
    <div className="app-container">
      {/* Image at the top middle */}
      <img src={imageUrl} alt="Sample" className="centered-image" />

      {/* Poem below the image */}
      <div className="poem-container">
        {poemLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      
    </div>
  );
};

export default Stuff;

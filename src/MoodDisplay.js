import React from 'react'

const MoodDisplay = ({props}) => {

    const moods =
        {
            happy : "keep smile !",
            sad : "It's okey to be sad sometimes",
            excited : "Let's Celebrate !",
            angry : "Take a deep breath"
        }

  return (
     <>
       <div>
        { props ? (<p> {moods[props]}</p>): ( <p>No reaction !!</p> )}
       </div>
     </>
  )
}

export default MoodDisplay
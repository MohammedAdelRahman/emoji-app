import './App.css';
import { useState } from 'react';
import MoodDisplay from './MoodDisplay';

function App() {
  
  const [mood , setMood] = useState('');
  return (
    <>
    <div className='container'>
      <h1>How do you Feel ?</h1>
      <div className='button'> 
       <button classname="btn happy" onClick={() => setMood("happy")} >😊😊HAPPY</button>
       <button classname="btn sad" onClick={() => setMood("sad")}>😒😒SAD</button>
       <button classname="btn Excited" onClick={() => setMood("excited")}>🤩🤩EXCITEED</button>
       <button classname="btn angry" onClick={() => setMood("angry")}>😡😡ANGRY</button>
      </div>
      <MoodDisplay props={mood} />
    </div>  
    </>
  );
}

export default App;
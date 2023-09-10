import React from "react";
import { useNavigate } from "react-router-dom";



  
    import ReactPlayer from 'react-player'



const Video = ({videos}) => {
    const navigate=useNavigate()


  return (
    <>
    <ReactPlayer controls url='https://www.youtube.com/watch?v=iPBXjYu_asA' />
    

    <h1>MORTAL ENGINES</h1>
    <p>This movie is sadly underrated. Do yourself a favor, just watch it & form your own opinion.
       Don't believe anyone who praises it as a masterpiece & DEFINITELY don't listen to anyone who calls
        it garbage (or even just bad). This film is actually packed to the brim with cool concepts, 
        stunning locals & compelling characters. It does suffer on the narrative side however & not 
        all the characters are worth their time on screen. Also the dialog could've used some more work.
         But if you can deal with that, Mortal Engines actually creates a fascinating world full of as many
          bright sights as it has grim realities. In fact the way it strikes this balance is easily one of
           its strongest traits.</p>
     
    <ReactPlayer controls url='https://www.youtube.com/watch?v=pdJVtWgaSeQ' />
    <h1>Expendables 3 </h1>
    <p>Best movie in Expendables series so far. This time casting is huge including new young actors who fight side-by-side with veterans. 
Story involves a renegade ex-expendable member Stonebanks going against expendables team. First, expendables rescue former member Doctor death from prison train & then discover arms trader is Stonebanks who was considered dead. Expendables team engage in battle, recruit new members to save old, captures Stonebanks, en-route getting captured & finally getting saved by old team with some help from friends, killing Stonebanks & army. 
Overall, it's huge action packed movie with lots of tanks & gun fire show. Fully entertaining, solid casting, good story & action sequences. I would rate it 4/5.</p>
      
  
      <ReactPlayer controls url='https://www.youtube.com/watch?v=4wxyy8Rcz4k' />
      <h1>Blue Beetle</h1>
      <p>This is a GREAT Family film, a nice end to Summer. If you Like the character and his interpretations 
        throughout the different TV shows you'll LOVE him here. The Story acts as a SOLID introduction to the
         character but having known the Scarabs REACH background from the comics i would have liked for it to
         be addressed more in the movie, however they do clarify its an alien which is fine but a minor gripe. 
     </p>
     <button onClick={()=>navigate(-1)}>Back now</button>
    </>
  );

};

export default Video;
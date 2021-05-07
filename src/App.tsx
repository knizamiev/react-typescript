import React from 'react';
import Lesson1 from "./lesson1/Lesson1";
import Lesson2 from "./lesson2/Lesson2";
import Lesson3 from "./lesson3/Lesson3";

const App: React.FC = () => {
  return(
      <div>
       <Lesson1/>
       <Lesson2 />
       <Lesson3/>
      </div>
  )
}

export default App;


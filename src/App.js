import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
   return (
     <div>
       <h1>Heading</h1>
       <p id="para1">This is first paragraph</p>
       <div>
       <input id="input1" name="input1"></input>
       </div>
    <div>This is JSX
     </div>
     </div>
   );
// return React.createElement("h1",{title:"This is Heading"},"Heading")
}

export default App;

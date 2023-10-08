import { useState } from 'react'
import './App.css'
import './pruebitas'
import { getLongestSubString } from './pruebitas';

function App() {
  const [ longest, setLongest ] = useState('');
  const [ input, setInput ] = useState('');

  const getLongestSubString = (str) =>{
    let subStr = '';
    let subArr = [];
    for (let i = 0; i < str.length; i++){
        let currentChar = str[i];
            if(subStr.includes(currentChar)){
                subArr.push(subStr);
                subStr = currentChar;
            } else{
                subStr += currentChar;
            }
    }
    subArr.push(subStr);
    let maxLength = 0;
    let maxSubStr = '';
    for(let i = 0; i < subArr.length; i++){
        if(subArr[i].length >= maxLength){
            maxLength = subArr[i].length;
            maxSubStr = subArr[i];
        }
    }
    setLongest(maxSubStr)
}

  return (
    <>
      <h1>Hello, Several algorithms implemented in one react app to practice for further interviews</h1>
      <br></br>

      <h2>Longest substring checker</h2>
      <input value={input} onChange={((e) => setInput(e.target.value))} />
      <p>{longest}</p>
      <br></br>
      <button onClick={(() => getLongestSubString(input))}>Check</button>
      
    </>
  )
}

export default App

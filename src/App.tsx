import React, { useCallback, useRef, useState } from 'react';


function App() {
const [number,setNumber] =useState(0)
const countRef = useRef(0)

const increaseCountNumber = useCallback(
  () =>{
    setNumber(number +1);
  },[number]) 
//ref는 재렌더링되야 값이 표시되고 재렌더링되도 값이 초기화되지않는다.
const increaseCountRef = () =>{
 countRef.current = countRef.current +1;
}



  return (
    <div>
      <input value={number } placeholder="숫자" />
      <p>{number}</p>
      <p>ref:{countRef.current}</p>
      <button onClick={increaseCountNumber}>숫자올리기</button>
      <button onClick={increaseCountRef}>ref올리기</button>
    </div>
  );
}

export default App;

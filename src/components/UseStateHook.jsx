import React, { useState } from "react";

function UseStateHook() {
  // const [newCount, setNewCount] = useState(0)
  // const [count, setCount] = useState(0)
  // console.log(count);
  // console.log(setCount);

  const [count, setCount] = useState(0);

  const inc = () => {
    console.log(count);
    setCount(count + 1);
  };
  const dec = () =>{
    if(count>0) setCount(count-1)
  }

const[person,setPerson] =useState({
    name:"Ridvan",
    age:30
})

const ageInc = ()=>{
    setPerson({...person,age: person.age +1})
}
const ageDec = ()=>{
    setPerson({...person,age: person.age -1})
}
const nameChange = ()=>{
    setPerson({...person,name: "Micheal"})

}
  return (
    <>
    <div className="container text-center mt-3">
      <h1>Use State Hook</h1>
      <h2>Count:{count}</h2>
      <button onClick={inc} className="btn btn-primary">
        Artir
      </button>
      <button onClick={()=> setCount(0)} className="btn btn-danger">Sifirla</button>
      {/* <button onClick={dec} className="btn btn-dark">Azalt</button> */}
      <button onClick={()=> count >0 && setCount(count-1)} className="btn btn-dark">Azalt</button>
    </div>
    <div className="container text-center mt-3">
        <h2>Person</h2>
        <h4>{person.name}</h4>
        <h4>{person.age}</h4>
        <button onClick={(ageInc)} className="btn btn-primary m-2">Yas Artir</button>
        <button onClick={(nameChange)} className="btn btn-primary mx-2">Ismi degistir</button>
        <button onClick={() => setPerson({...person,name: "Rifki dayi"})} className="btn btn-primary mx-2">Ismi degistir2</button>
        <button onClick={() => setPerson({...person,name: "Ridvan"})} className="btn btn-primary mx-2">Ismi resetle</button>
        <button onClick={(ageDec)} className="btn btn-primary m-2">Yas Azalt</button>

    </div>

    </>
  );
}

export default UseStateHook;

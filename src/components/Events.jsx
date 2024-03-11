import React from "react";

//onclick event tiklama olayi
//onchange event input alanina yazi yazildiginda onun degerini takip eder.
//onsubmit form gonderildiginde calisir

function Events() {
  let message = "Merhaba";
  const handleClick = () => {
    alert(message);
  };

  const handleGo = (msg) => {
    alert(msg);
  };
  return (
    <div>
      {/* <button onClick={() => console.log("Buttona tiklandi")} className='btn btn-success'>Tikla</button>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
    <form onSubmit={(e)=> { e.preventDefault(); console.log("form Gonderildi")}}> 
    <button type='submit' className='btn btn-danger'>Gonder</button>
    </form> */}
      <h1>Baslik: {message}</h1>
      <button onClick={handleClick} className="btn btn-dark">
        Tikla
      </button>
      <button
        onClick={() => handleGo("Yeni Dersimiz Events")}
        className="btn btn-primary"
      >
        Gonder
      </button>
    </div>
  );
}

export default Events;

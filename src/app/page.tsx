'use client';

import { useState } from "react";
import { addName } from "./firebaseConfig";

export default function HomePage() {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  
  function handleFname(e) {
    setfname(e.target.value)
    localStorage.setItem('fname', e.target.value);
  }

  function handleLname(e) {
    setlname(e.target.value)
    localStorage.setItem('lname', e.target.value);
  }

  async function handleSubmit() {
    await addName(localStorage.getItem('fname'), localStorage.getItem('lname'))
  }

  return (
    <div className="flex flex-col p-4 gap-2">
      <div>
        <label htmlFor="fname">First name: </label>
        <input type="text" id="fname" name="fname" value={fname} onChange={e => handleFname(e)} className="border border-blue-500 p-1" />
      </div>
      <div>
        <label htmlFor="lname">Last name: </label>
        <input type="text" id="lname" name="lname" value={lname} onChange={e => handleLname(e)} className="border border-yellow-500 p-1" />
      </div>
      <div>
        <button type="submit" className="p-2 bg-green-600 rounded-md" onClick={() => handleSubmit()}>submit</button>
      </div>
    </div>
  );
}

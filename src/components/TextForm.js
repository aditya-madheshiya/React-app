import React, { useState } from "react";
function TextForm() {
  const [text, setText] = useState("Enter the value");
  const handleclick = () => {
    console.log("click");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const onchangehandle = (event) => {
    //onchage se hume event milta hai
    console.log("change");
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <h2>Feedback Form</h2>
        <form>
          <label>Your Message:</label>
          <textarea
            rows="5"
            cols="40"
            value={text}
            onChange={onchangehandle}
          ></textarea>
          <br></br>
        </form>
        <button onClick={handleclick}>Convbver to upper case</button>
      </div>
      <div>
        <h1>Text summery</h1>
        <br></br>
        <p>
          {text.split(" ").filter((element) =>{ return element.length !== 0}).length} word nad {text.length} characters
        </p>
      </div>
    </>
  );
}
export default TextForm;

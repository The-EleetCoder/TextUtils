import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  {
    /* Hooks */
  }
  const [text, setText] = useState("");

  return (
    <div className="container">
      <div className="container my-3">
        <div className="mb-3">
          <h1 style={{color: props.mode==='dark'?'white':'#2d2d30'}}>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark'?'#2d2d30':'white', color: props.mode==='dark'?'white':'#2d2d30'}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
      </div>

      <div className="container my-4" style={{color: props.mode==='dark'?'white':'#2d2d30'}}>
        <h2>Your text summary!</h2>
        <p className="mx-4">
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p className="mx-4">{0.008 * text.split(" ").length} minutes read.</p>
        <h2>Preview</h2>
        <p className="mx-4">{text}</p>
      </div>
    </div>
  );
}

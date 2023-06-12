import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  // text = "ajldfh" //wrong way to change the state
  // setText("hakhf") //correct way to change the state

  const handleUppercaseClick = () => {
    // console.log(`Uppercase was clicked`);
    setText(text.toUpperCase());
    props.showAlert(`Converted to uppercase`, `success`)
  };
  
  const handleLowercaseClick = () => {
    // console.log(`Lowercase was clicked`);
    setText(text.toLowerCase());
    props.showAlert(`Converted to Lowercase`, `success`)
  };
  
  const handleResetClick = () => {
    // console.log(`Reset was clicked`);
    setText("");
    props.showAlert(`Text cleared`, `success`)
  };

  const handleOnChange = (event) => {
    // console.log(`Text was chnaged!`);
    setText(event.target.value);
  };

  const textBoxClicked = () => {
    setText(``);
  }

  return (
    <>
    
    <div className="container" >
      <div className="TextArea">
        <label htmlFor="myBox" className="form-label" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
          {props.heading}
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          onClick={textBoxClicked}
          placeholder="Enter text here..."
          id="myBox"
          rows="8"
          style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}}
        ></textarea>
      </div>
      <button className="btn btn-primary my-3" onClick={handleUppercaseClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary m-3" onClick={handleLowercaseClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary" onClick={handleResetClick}>
        Reset
      </button>
    </div>
    <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
      <h3>Text Summary</h3>
      <p>{text === '' ? `0 words and 0 characters.` : `${text.split(" ").length} words and ${text.length} characters.`}</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:`Enter something to preview it here`}</p>
    </div>
    </>
  );
}

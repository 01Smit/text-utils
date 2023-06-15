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
  
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert(`Text copied`, `success`);
  }
  
  // const handlePasteClick = () => {
  //   document.querySelector('textarea').value += navigator.clipboard.readText();
  //   props.showAlert(`Text pasted`, `success`);
  // }

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
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUppercaseClick}>
        Convert to Uppercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowercaseClick}>
        Convert to Lowercase
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
        Copy to clipboard
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleResetClick}>
        Reset
      </button>
      {/* <button className="btn btn-primary m-3" onClick={handlePasteClick}>
        Paste
      </button> */}
    </div>
    <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
      <h3>Text Summary</h3>
      <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:`Nothing to preview!!`}</p>
    </div>
    </>
  );
}

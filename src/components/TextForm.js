import React, { useState } from 'react';

export default function TextForm() {
    const [text, settext] = useState("");
    const [action, setaction] = useState("");
    const [showhide, setshowhide] = useState("none");

    const changeText = (e) => {
        settext(e.target.value);
    }

    const upperCase = () => {
        let newText = text.toUpperCase();
        setaction("Text Transfered to uppercase");
        settext(newText);
        setshowhide("block")
    }

    const lowerCase = () => {
        let newText = text.toLowerCase();
        setaction("Text Transfered to Lower Case");
        settext(newText);
        setshowhide("block")
    }

    const removeSpace = () => {
        let newText = text.replace(/ /g,'');
        setaction("Spaces Hasbeen Removed");
        settext(newText);
        setshowhide("block")
    }

    const cpclipboard = () => {
        navigator.clipboard.writeText(text);
        setaction("Copied");
        setshowhide("block")
    }

    const hideme = () => {
        setshowhide("none")
    }

  return (
      <div className="container">
    <div className="mb-3">
        <h1>Enter your text here</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={changeText}></textarea>
        <button className="btn btn-outline-primary my-3 mx-3" onClick={upperCase}>Upper Case</button>
        <button className="btn btn-outline-primary my-3 mx-3" onClick={lowerCase}>Lower Case</button>
        <button className="btn btn-outline-primary my-3 mx-3" onClick={removeSpace}>Remove Space</button>
        <button className="btn btn-outline-primary my-3 mx-3" onClick={cpclipboard}><i className="fa-solid fa-copy"></i></button>

        <h2>Text Summery</h2>
        <p>{text.split(" ").length} <b>Words</b> and {text.length} <b> Charectors</b></p>

        <h2>Your Text:</h2>
        <p>{text}</p>

        <div className="notification" style={{"display":showhide}}>
            <span id="toglenotification" onClick={hideme}>+</span>
            <p>{action}</p>
        </div>
    </div>
    </div>
  )
}



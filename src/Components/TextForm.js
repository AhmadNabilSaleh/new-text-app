import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log(text.toUpperCase);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLowClick = () => {
        // console.log(text.toUpperCase);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);

    }

     const clearClick = () =>{
         let newText = "";
        setText(newText);
                props.showAlert("Text Cleared", "success");

     }
     const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
            props.showAlert("Copied to Clipboard", "success");

};

    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style = {{color: props.mode === 'dark' ? 'white' : '#030632'}}>
                <h1 className='mb-4'> {props.heading} </h1>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : '#030632'}}  id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}> Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearClick}> Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>

            
            </div>

            <div className="container my-3" style = {{color: props.mode === 'dark' ? 'white' : '#030632'}}>
                <h1> Your Summary of Text</h1>
                <p>{text.trim().split(/\s+/).filter(word => word !== "").length} words and {text.length} characters</p>
                <p> {0.008 * (text.trim().split(" ").filter(word => word !== "").length)} Minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to Preview"}</p>
            </div>
        </>
    )
}

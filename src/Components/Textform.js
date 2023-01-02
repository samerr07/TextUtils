import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoClick = ()=>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleClear = ()=>{
    
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }

  const reverse = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords
    setText(newText);
    props.showAlert("Reverses a string", "success");

  };
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }

  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    
    props.showAlert("Copied to clipboard", "success");
}

  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }


  const [text, setText] = useState("");  //useState("Enter text here")
  // text ki value Enter text here h
  // text = "newtext"; wrong way to change the state
  // setText("newtext"); Correct way to change the state
  return (
    <>
    <div className="container" style = {{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#13466e':'white' , color:props.mode=== 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={reverse}>Reversed the String</button>




    </div>
    <div className="container my-3" style = {{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read </p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text:"Nothing to Preview!"}</p>
    </div>
    
    </>
    
  )
}

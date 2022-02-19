import React, {useState} from 'react'

export default function TextForm(props) {
    
    const [text,setText] = useState("");
    function handelChange(event){
        setText(event.target.value);
    }
    function onUpperCase(){
       let upperText = text.toUpperCase();
       setText(upperText);
       props.alert("Converted to Upper Case","success");
    }
    function onLowerCase(){
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.alert("Converted to Lower Case","success");
     }
    function onSpaceRemove(){
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.alert("All extra spaces are Removed","success");
        }
    function onClear(){
        setText("");
        props.alert("Textbox is cleared","success");
     }
  return (
    <div   style={{color: props.mode==='dark' &&'white'}} >
        <div className="container">
            <h2>{props.heading}</h2>
            <textarea
                style={{backgroundColor: props.mode==='dark' && 'grey' , 
                        color: props.mode==='dark' &&'white'}}
                className="form-control my-3"
                onChange={handelChange}
                id="TextArea" rows="5"
                value={text}
            >
            </textarea>
            <button 
                onClick={onUpperCase}
                className="btn btn-primary mx-1 my-1">
                    Upper  Case
            </button>
            <button 
                onClick={onLowerCase}
                className="btn btn-primary mx-1 my-1">
                    Lower Case
            </button>
            <button 
                onClick={onSpaceRemove}
                className="btn btn-primary  mx-1 my-1">
                    Remove Extra Spaces
            </button>
            <button 
                onClick={onClear}
                className="btn btn-primary  mx-1 my-1">
                    Clear
            </button>
        </div>
        <div className="container my-3">
            <h3>Your Text Summary </h3>
            <p>{text.split(" ").filter(element => element.length !== 0).length} words and {text.length} characters</p>
            <p>{0.48 * text.split(" ").filter(element => element.length !== 0).length} seconds to read.</p>
            <h3>Preview</h3>
            <p>{text.length===0 ? "Enter something in the textbox to Preview here" : text }</p>
        </div>
    </div>
  )
}

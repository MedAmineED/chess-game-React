import React from "react";
import './TextInput.css'


function TextInput (props) {
    
    
    return (
          <>
            <label htmlFor={props.inputId}>
                {props.labelText}
            </label>
            <input className="input-parameter"  
                    type="text" 
                    required = "required"
                    id= {props.inputId} 
                    value={props.playerName} 
                    onChange={props.handleChange}></input>
          </>
    )
}

export default TextInput;
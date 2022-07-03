import React, { useState } from "react";
import "./form.css";

function Form() {

    const [text, setText] = useState("");


    function upperClickHandler() {
        let upTxt = text.toUpperCase();
        setText(upTxt);

    }
    function lowerClickHandler() {
        let lowTxt = text.toLowerCase();
        setText(lowTxt);
    }
    function resetClickHandler() {
        setText("");
    }
    function changeHandler(event) {
        setText(event.target.value);

    }



    
    const [mystyle, setmystyle] = useState({
        color:'black',
        backgroundColor:'#d1c7c7'
    })
    
    const [btnTxt, setbtnTxt] = useState("Dark mode on")
    const togglemode = () => {
            if (mystyle.color==='black') {
                setmystyle({
                    color:'red',
                    backgroundColor:'blue'
                })
                setbtnTxt("dark mode of")
            }
            else {
                setmystyle({
                    color:'black',
                    backgroundColor:'#d1c7c7'
                })
                setbtnTxt("dark mode on")
            }

        }

            return (
                <div style={mystyle}>
                    <textarea className="input" placeholder="Type your text here" value={text} onChange={changeHandler} rows="15" cols="80" />
                    <div className=" button">
                        <button className="btn" onClick={upperClickHandler}>Upperchar</button>
                        <button className="btn" onClick={lowerClickHandler}>LowerChar</button>
                        <button className="btn" onClick={resetClickHandler}>Reset</button>
                        <button className="btn" onClick={togglemode} >{btnTxt} </button>

                    </div>

                    <div>
                        <h2>Your text summary</h2>
                        <p>{text.split(" ").length} word and {text.length} character</p>
                        <p>Time need to read this paragraph is {0.008 * text.split(" ").length} per minute</p>
                        <h1>Preview</h1>
                        <p>{text}</p>

                    </div>
                </div>
            )


        }

export default Form;
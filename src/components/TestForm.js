import React, { useState } from 'react'

function TestForm(props) {

    const [txtValue, setTextValue] = useState('')
    const [words, setWords] = useState(0);
    const [characters, setCharacters] = useState(0)
    const [char, setChar] = useState(0)
    const [wor, setWor] = useState(0)

    const handleChange = (event) => {
        setTextValue(event.target.value)

        let len = txtValue.length
        let words = txtValue.split(" ").length
        setCharacters(len)
        setWords(words)
    }

    const handleClick = () => {
        
        setChar(characters)
        // setWor(words)
        // let regex = /\w+\s+/;
        let l = txtValue.split(/\w+/).length - 1;
    
        setWor(l);
        props.showAlert("success","Text Summary has been Generated");
    }

    const convertUpper = () => {
        setTextValue(txtValue.toUpperCase())
        props.showAlert("warning","Text Converted to UPPERCASE Successfully");
    }
    const convertLower = () => {
        setTextValue(txtValue.toLowerCase())
        props.showAlert("info","Text Converted to lowercase Successfully");
    }

    const clearText = () => {
        setTextValue('');
        props.showAlert("danger","Text cleared successfully");
    }


    return (
        <>
            <div className="container form-floating col-lg-8 col-md-10 col-sm-12 float-lg-left">
                <div className="panel panel-primary">
                    <div className="panel-heading my-3">
                        <h1  className={`text-${props.mode == 'light'? 'dark':'white'}`}>Enter the Text below in the box to be analysed </h1>
                    </div>
                    <div className="panel-body float-left">

                        <textarea className="form-control" style={{backgroundColor: props.mode == 'dark'?'grey':'white', color: props.mode == 'dark'?'white':'black'}} placeholder="Leave a comment here" rows="6" id="textarea" value={txtValue} onChange={handleChange}></textarea>
                        <button className="btn btn-primary mx-3 my-3 mx-float" onClick={handleClick}>Summarise the Text</button>
                        <button className="btn btn-primary mx-3 my-3 mx-float" onClick={convertUpper}>Convert To UPPERCASE</button>
                        <button className="btn btn-primary mx-3 my-3 mx-float" onClick={convertLower}>Convert to Lowercase</button>
                        <button className="btn btn-primary mx-3 my-3 mx-float" onClick={clearText}>Clear Text</button><br />
                        <label for="floatingTextarea" className={`label label-primary text-${props.mode == 'light'? 'dark':'white'}`}>no of words = {wor} and no of characters  = {char}</label>

                        <h1 className={`text-${props.mode == 'light'? 'dark':'white'}`}>Preview</h1>
                        <p  className={`text-${props.mode == 'light'? 'dark':'white'}`}>{txtValue}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TestForm
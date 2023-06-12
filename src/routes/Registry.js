import userEvent from '@testing-library/user-event';
import React from 'react';
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
function Registry() {
    const [registryData, setRegistryData] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [error, setError] = useState(false);
    const addItems = (e) => {
        e.preventDefault();

        const tempData = [...registryData];
        tempData.push(textInput);
        setRegistryData(tempData);
        setTextInput("");
        // console.log(registryData);

    }

    useEffect(() => {
        if(textInput.length > 10) setError(true);
        else setError(false);
    }, [textInput])

    console.log(registryData);
    return (
        <div>
            <h1>Registry</h1>
            <Link to="/">Click here for Home</Link>
            <form onSubmit={addItems}>
                <label>Text input
            <input type='text' value={textInput} onChange={(e) => setTextInput(e.target.value)}/>
            </label>
            <input type='submit' value='Submit' />
            </form>
           {error ? <span style={{color: "red"}}>Error occurred.</span> : null}
        </div>
    )
}

export default Registry;
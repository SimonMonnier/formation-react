import React from 'react'
import './IncrBtn.css';


export default function IncrBtn(props) {
    return (
        <div className="btnIncr" onClick={props.clicked}>
           {props.txt}
        </div>
    )
}

import React from 'react'

import './Post.css'

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div>
            <div className="Auteur">{props.author}</div>
        </div>
    </article>
);

export default post;
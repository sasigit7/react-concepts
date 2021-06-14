import React from "react";

function Props(props) {
    return(
        <div>
            <p>{props.topic}</p>
            <p>{props.title}</p>
            <p>{props.name}</p>
            <p>{props.job}</p>
            <p>{props.location}</p>
        </div>
    );
}

export default Props;
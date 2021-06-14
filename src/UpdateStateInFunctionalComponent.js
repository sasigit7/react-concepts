import React, { useState } from "react";

function UpdateStateInFunctionalComponent() {
    // Update state using hooks and setting extra property
    const [title, setTitle] = useState("Click here to Update State in functional component!");
    return(
        <button onClick={()=> setTitle("I am an updated State in functional component!")}>{title}</button>
    );
}

export default UpdateStateInFunctionalComponent;
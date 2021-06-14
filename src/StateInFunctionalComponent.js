import React, { useState } from "react";

function StateInFunctionalComponent() {
    // We use react hooks to implement state here
    const [title] = useState("I am a State in functional component!");
    return(
         <h2>{title}</h2>
    );
}

export default StateInFunctionalComponent;





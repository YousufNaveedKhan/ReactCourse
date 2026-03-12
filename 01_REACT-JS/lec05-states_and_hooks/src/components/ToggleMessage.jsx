import { useState } from "react";

function ToggleMessage() {
    const [show, setShow] = useState(true);

    function toggleText() {
        setShow(!show);
    }

    return (
        <div style={{textAlign: "center", marginTop: "15px"}}>
            <h2>{show && "This is my text"}</h2>
            <button onClick={toggleText}>Show / Hide</button>
        </div>
    )
}

export default ToggleMessage;
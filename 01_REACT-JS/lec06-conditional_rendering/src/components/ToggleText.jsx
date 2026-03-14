import { useState } from "react";

function ToggleText() {
    const [show, setShow] = useState(true);

    function toggleText() {
        setShow(!show);
    }

    return (
        <div style={{textAlign: "center", marginTop: "30px"}}>
            <button onClick={toggleText}>Show / Hide Text</button>

            {show && <h2>Welcome to React</h2>}
        </div>
    )
}

export default ToggleText;
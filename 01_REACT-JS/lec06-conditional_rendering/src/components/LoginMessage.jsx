import { useState } from "react";

function LoginMessage() {
    const [loggedIn, setloggedIn] = useState(false);

    function toggleLogin() {
        setloggedIn(!loggedIn);
    }

    return (
        <div style={{textAlign: "center", marginTop: "30px"}}>
            <button onClick={toggleLogin}>Toggle Login</button>
            {loggedIn ? <h2>Welcome to our website</h2> : <h2>Please Login</h2>}
        </div>
    )
}

export default LoginMessage;
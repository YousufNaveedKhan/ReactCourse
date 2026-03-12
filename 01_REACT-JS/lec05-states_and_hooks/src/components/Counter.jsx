import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1)
    }

    function decrease() {
        setCount(count - 1)
    }

    return (
        <div style={{textAlign: "center", marginTop: "15px"}}>
            <h2>{count}</h2>

            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Counter;
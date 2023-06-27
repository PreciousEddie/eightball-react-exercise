import React, { useState } from "react";
import defaultAnswers from "./answers.json"
import { choice } from "./choices";
import "./Eightball.css"

function Eightball({ answers = defaultAnswers }) {
    const reset = () => {
        setAnswer({ msg: "Think of a Question.", color: "black" })
    }
    const [answer, setAnswer] = useState({
        msg: "Think of a Question.",
        color: "black"
    });

    function handleClick(evt) {
        setAnswer(choice(answers));
    }

    return (
        <>
            <div
                className="Eightball"
                onClick={ handleClick }
                style={ { backgroundColor: answer.color } }
            >
                <b>{ answer.msg }</b>
            </div>
            <button onClick={ reset }>Reset</button>
        </>
    );
}

export default Eightball;
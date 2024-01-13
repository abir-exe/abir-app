import { useState } from "react";


const State = () => {

    const [value, setValue] = useState("Abir Mahmud")

    const add = () => {
        setValue("Motin Mia")
    }


    return (
        <div>
            <p>Hello {value}</p>
            <button onClick={add}>Change Name</button>
        </div>
    );
};

export default State;
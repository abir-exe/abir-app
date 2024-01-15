import { useState } from "react";


const State = () => {

    const [value, setValue] = useState("Abir Mahmud")

    const add = () => {
        setValue("IDK WHo ") 
    }


    return (
        <div>
            <p>Hello {value}</p>
            <button onClick={add}>Change Name</button>
        </div>
    );
};

export default State;
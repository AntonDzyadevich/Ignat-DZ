import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";


export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]);

    const addUserCallback = (name: string) => {
        let user = {_id: v1(), name: name};
        let newUser = [user, ...users]
        setUsers(newUser)
    }

    return (
        <div>
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    );
}

export default HW3;

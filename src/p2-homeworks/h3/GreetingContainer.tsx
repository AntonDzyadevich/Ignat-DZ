import React, {useState, ChangeEvent, KeyboardEvent} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string | null>("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === "Enter") {
            addUser()
        }
    }

    const addUser = () => {
        if (name.trim() !== "") {
            addUserCallback(name.trim())
            alert(`Hello  ${name}!`)
            setName("")
        } else {
            setError("Name is required")
        }
    };

    let totalUsers = 0;
    totalUsers = users.length


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPressHandler={onKeyPress}
        />
    );
}

export default GreetingContainer;

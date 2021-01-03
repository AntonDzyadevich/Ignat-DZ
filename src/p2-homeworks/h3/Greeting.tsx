import React, {ChangeEvent, KeyboardEvent} from "react";
import s from "./Greeting.module.css";


type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string | null
    totalUsers: number
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}


const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : " ";

    return (
        <div className={s.content}>

            <input value={name} onChange={setNameCallback} onKeyPress={onKeyPressHandler} className={inputClass}/>
            {error && <span className={s.errorMessage}>{error}</span>}
            <button onClick={addUser} className={s.but}>add</button>
            <span className={s.total}>{totalUsers}</span>
        </div>
    );
}

export default Greeting;

import React from "react";
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";


type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () =>{props.deleteAffairCallback(props.affair._id)};// need to fix
    return (
        <div className={s.list}>
            <li className={s.affairs}>
              <span>{props.affair.name}</span>
            </li>
            <div className={s.deleteBut} >
                <button onClick={deleteCallback}>X</button>
            </div>

        </div>
    );
}

export default Affair;

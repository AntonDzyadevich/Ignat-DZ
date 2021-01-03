import React from "react";
import s from "./Message.module.css";
import {AlternativeMessageDataType} from "./HW1";


function AlternativeMessage(props: AlternativeMessageDataType) {
    return (
        <div className={s.block1}>
            <img className={s.ava} src={props.avatar}/>
            <div className={s.triangle}></div>
            <div className={s.info1}>
                <h1 className={s.myName}>{props.name}</h1>
                <span className={s.myMessage}>{props.message}</span>
                <div className={s.time}><span>{props.time}</span></div>
            </div>
        </div>
    );
}

export default AlternativeMessage;

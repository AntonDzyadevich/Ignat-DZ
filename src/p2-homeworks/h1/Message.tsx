import React from "react";
import {messageDataType} from "./HW1";
import s from './Message.module.css';


function Message(props: messageDataType) {
    return (
        <div className={s.block}>
            <img className={s.ava} src={props.avatar}/>
            <div className={s.triangle}></div>
            <div className={s.info}>
                <h1 className={s.myName}>{props.name}</h1>
                <span className={s.myMessage}>{props.message}</span>
                <div className={s.time}><span>{props.time}</span></div>
            </div>

        </div>
    );
}

export default Message;

import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";


const messageData = {
    avatar: "https://avatarko.ru/img/kartinka/23/multfilm_sport_minion_22531.jpg",
    name: "Anton",
    message: "Hello, no panic!",
    time: "22:00",
};

export type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
};

const AlternativeMessageData={
    avatar: "http://a410.phobos.apple.com/us/r30/Purple4/v4/4a/e7/01/4ae70144-bf71-f5a7-846d-04eb10fcda57/mzl.njvkihad.png",
    name: "Nasty",
    message: "Ok, I calmed down!",
    time: "22:02",
};
export type AlternativeMessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
};

function HW1() {
    return (
        <div>
            <hr/>
            <div>homeworks 1</div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />


            <AlternativeMessage
                avatar={AlternativeMessageData.avatar}
                name={AlternativeMessageData.name}
                message={AlternativeMessageData.message}
                time={AlternativeMessageData.time}
            />
            <hr/>
        </div>
    );
}

export default HW1;

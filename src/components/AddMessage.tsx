import React, {useState} from "react";
import {FollInput} from "./FollInput";

export type MessageType = {
    message: string
}

export const AddMessage = () => {
    const [message, setMessage] = useState<MessageType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    const [title, setTitle] = useState('')


    const addMessage = (title: string) => {
        setMessage([ {message: title}, ...message ])
    }

    const onClickButtonAddMessageHandler = () => {
        addMessage(title)
        setTitle('')
    }


    return (
        <div>
            <FollInput addMessage={onClickButtonAddMessageHandler}
                       title={title}
                       setTitle={setTitle}/>
            {message.map((el, id) => <div key={id}>{el.message}</div>)}
        </div>
    )
}
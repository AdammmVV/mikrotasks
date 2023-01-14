import React from "react";
import {Input} from "./Input";
import {Button} from "./Button";

type FollInputPropsType = {
    addMessage: () => void
    title: string
    setTitle: (title: string) => void
}

export const FollInput = (props: FollInputPropsType) => {
    return (
        <div>
            <Input setTitle={props.setTitle} title={props.title}/>
            <Button callBack={props.addMessage} name={'+'}/>
        </div>
    );
};


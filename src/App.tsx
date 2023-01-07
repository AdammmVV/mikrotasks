import React, {useState} from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/NewComponent";
import {Button} from "./site/Button";
import {isNumber} from "util";

function App() {

    const [data, setStudents] = useState({
        topCars: [
            {manufacturer:'BMW', model:'m5cs'},
            {manufacturer:'Mercedes', model:'e63s'},
            {manufacturer:'Audi', model:'rs6'}
        ],
        students: [
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
        ]
    })

    const Button1Foo = (subscriber: string = 'I`m stupid button', age: number = 0, address: string = '') => {
        console.log(subscriber, age, address)
    }
    return (
        <>
            <Header titleForHeader={'NEW HEADER'}/>
            <Body titleForBody={'NEW BODY'}/>
            <Footer titleForFooter={'NEW FOOTER'}/>
            <NewComponent data={data}/>
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('I`m Vasya', 21, 'I`m from Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button1Foo('I`m Ivan')}/>
            <Button name={'Stupid Button'} callBack={() => Button1Foo()}/>
        </>
    )
}

export default App;

import React, {useState} from 'react';
import './App.css';
import {Money} from "./site/Money";
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./site/NewComponent";
import {Button} from "./site/Button";
import {AddMessage} from "./components/AddMessage";

export type FilterMoneyType = 'all' | 'dollars' | 'rubles';

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

    let [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ])
    let [a, setA] = useState(1);

    let [filter, setFilter] = useState<FilterMoneyType>('all')

    const Button1Foo = (subscriber: string = 'I`m stupid button', age: number = 0, address: string = '') => {
        console.log(subscriber, age, address)
    }



    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }
    const resetsList = () => {
        setA(a = 0);
        console.log(a)
    }


    let currentMoney = money

    const FilterMoney = (filter: FilterMoneyType) => {
        return setFilter(filter);
    }
    if(filter === 'rubles') {
        currentMoney = money.filter(m => {
            return m.banknote === 'ruble'
        })
    }
    if(filter === 'dollars') {
        currentMoney = money.filter(m => {
            return m.banknote === 'dollar'
        })
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
            <h2>{a}</h2>
            <button onClick={onClickHandler}>Counter</button>
            <button onClick={resetsList}>0</button>
            <Money money={currentMoney} FilterMoney={FilterMoney}/>
            <AddMessage/>
        </>
    )
}

export default App;

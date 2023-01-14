import {FilterMoneyType} from "../App";

type MoneyPropsType = {
    money: Array<MoneyType>
    FilterMoney: (filter: FilterMoneyType) => void
}
type MoneyType = {
    banknote: string,
    nominal: number,
    number: string
}

export const Money = (props: MoneyPropsType) => {
    return (
        <>
            <ul>
                {props.money.map((m, index) => {
                    return (
                        <li key={index}>
                            <span> {m.banknote}</span>
                            <span> {m.nominal}</span>
                            <span> {m.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '30px'}}>
                <Button FilterMoney={()=>props.FilterMoney('all')} titleButton={'all'} />
                <Button FilterMoney={()=>props.FilterMoney("dollars")} titleButton={'dollars'} />
                <Button FilterMoney={()=>props.FilterMoney("rubles")} titleButton={'rubles'} />
            </div>

        </>

    )
}

type ButtonPropsType = {
    FilterMoney: () => void,
    titleButton: string
}

export const Button = (props: ButtonPropsType) => {
    return <button onClick={props.FilterMoney}>{props.titleButton}</button>
}
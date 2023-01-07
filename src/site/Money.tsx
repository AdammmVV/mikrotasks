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
                <button onClick={() => props.FilterMoney('all')}>all</button>
                <button onClick={() => props.FilterMoney("dollars")}>dollars</button>
                <button onClick={() => props.FilterMoney('rubles')}>rubles</button>
            </div>

        </>

    )
}
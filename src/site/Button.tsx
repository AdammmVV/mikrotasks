export const Button = () => {

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    const foo1 = () => {
        console.log(100200)
    }

    const foo2 = (number: number) => {
        console.log(number)
    }
    return (
        <div>
            <button onClick={() => {onClickHandler('Vasya')}}>MyYouTubeChanel-1</button>
            <button onClick={() => {onClickHandler('Ivan')}}>MyYouTubeChanel-2</button>

            <button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>1</button>
        </div>
    )
}
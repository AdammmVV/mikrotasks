type NewComponentPropsType = {
    data: {
        topCars: Array<TopCarsType>,
        students: Array<StudentsType>
    }
}

type TopCarsType = {
    manufacturer: string,
    model: string
}

type StudentsType = {
    id: number,
    name: string,
    age: number,
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <>
            <ul>
                {props.data.students.map(s => {
                    return (
                        <li key={s.id}>
                            <span>{s.name} -- </span>
                            <span>{s.age} years old</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
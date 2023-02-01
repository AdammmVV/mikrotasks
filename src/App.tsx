import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

export type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksTodoListType = {
    [todoListId: string]: TaskType[]
}

function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todoLists, setTodoLists] = useState<Array<TodoListsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<TasksTodoListType>({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "Whisky", isDone: true},
            {id: v1(), title: "Cola", isDone: true},
            {id: v1(), title: "Ace", isDone: false},
            {id: v1(), title: "smock", isDone: false},
            {id: v1(), title: "Whisky", isDone: false},
        ]
    });

    function changeFilter(value: FilterValuesType, todoListId: string) {
        const updateTodoList = todoLists.map(tl => tl.id === todoListId ? {...tl, filter: value} : tl)
        setTodoLists([...updateTodoList])
    }

    function removeTask(id: string, todoListId: string) {
        const updatedTasks = tasks[todoListId].filter(t => t.id !== id)
        setTasks({...tasks, [todoListId]: updatedTasks})

    }

    function addTask(title: string, todoListId: string) {
        const task = {id: v1(), title: title, isDone: false}
        setTasks({...tasks, [todoListId]: [task, ...tasks[todoListId]]})
    }

    function changeStatus(taskId: string, isDone: boolean, todoListId: string) {
        const updatedTasks = tasks[todoListId].map(t => t.id === taskId ? {...t, isDone: isDone} : t)
        setTasks({...tasks, [todoListId]: updatedTasks})
    }


    const mapTodoList = todoLists.map(todo => {
        let tasksForTodolist = tasks[todo.id];

        if (todo.filter === "active") {
            tasksForTodolist = tasks[todo.id].filter(t => !t.isDone);
        }
        if (todo.filter === "completed") {
            tasksForTodolist = tasks[todo.id].filter(t => t.isDone);
        }
        return (
            <Todolist
                key={todo.id}
                title={todo.title}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={todo.filter}
                todoListId={todo.id}
            />
        )
    })

    return (
        <div className="App">
            {mapTodoList}
        </div>
    );
}

export default App;

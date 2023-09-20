import {useEffect, useState} from "react";

function TaskApplication() {

    const [tasks, setTasks] = useState([]);

    async function loadTasks(){
        const res = await fetch("/api/tasks");
        setTasks(await res.json());
    }

    useEffect(() => {
        loadTasks();
    }, [])


    return <>
        <h1>This is your Task App</h1>
        {tasks.map(t => <div>{t.title}</div>)}
    </>
}

export default TaskApplication;
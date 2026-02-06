import { useState, useEffect } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import Spinner from "./Spinner";

export interface ITask {
    id: number;
    tx_name: string;
    st_status: boolean;
}

const TaskManager = () => {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchTasks = async () => {
        setLoading(true);
        setTimeout(() => {
            const savedTasks = localStorage.getItem("my_tasks");
            if (savedTasks) {
                setTasks(JSON.parse(savedTasks));
            } else {
                const defaultTasks = [
                    { id: 1, tx_name: "Tarea de ejemplo 1", st_status: false },
                ];
                setTasks(defaultTasks);
                localStorage.setItem("my_tasks", JSON.stringify(defaultTasks));
            }
            setLoading(false);
        }, 800);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = (title: string) => {
        const newTask: ITask = {
            id: Date.now(),
            tx_name: title,
            st_status: false
        };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem("my_tasks", JSON.stringify(updatedTasks));
    };

    const toggleTaskCompletion = (id: number) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, st_status: !task.st_status } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem("my_tasks", JSON.stringify(updatedTasks));
    };

    return (
        <div className="flex flex-col items-center gap-y-6 p-6 max-w-md mx-auto bg-white rounded-xl shadow-lg min-w-[80%] md:min-w-[40%]">
            <h1 className="text-3xl font-bold text-indigo-700">Gestor de Tareas</h1>
            <TaskInput addTask={addTask} />
            {loading ? (
                <div className="flex items-center justify-center w-full pt-10">
                    <Spinner />
                </div>
            ) : (
                <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
            )}
        </div>
    );
};

export default TaskManager;
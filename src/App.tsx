import './globals.css'
import { Header } from "./components/Header"
import { PlusCircle, ClipboardText } from "phosphor-react";
import style from './App.module.css';
import { Task } from './components/Task';
import { ITask } from './interfaces/Task';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

function App() {
    const [tasks, setTasks] = useState<ITask[]>([]);
    const [newTask, setNewTask] = useState<string>('');
    const [taskCount, setTaskCount] = useState<number>(0);

    const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.target.value);
    }

    const handleNewTask = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (newTask.trim() === '') {
            return;
        }
        const newTaskData = {
            id: new Date().getTime().toString(),
            description: newTask,
            done: false
        }
        setTasks([...tasks, newTaskData]);
        setNewTask('');
    }

    const handleDoneTask = (id: string) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done
                }
            }
            return task;
        }))
    }

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    useEffect(
        () => {
            setTaskCount(tasks.length);
        },
        [tasks]
    )

    const isEmptyNewTask = newTask.trim() === '';
    return (
        <div className="App">
            <Header />
            <main className={style.content}>
                <form
                    className={style.form}
                    onSubmit={handleNewTask}
                >
                    <input
                        placeholder="Adicione uma nova tarefa"
                        value={newTask}
                        onChange={handleNewTaskChange}
                    />
                    <button
                        type="submit"
                        disabled={isEmptyNewTask}
                    >
                        Criar
                        <PlusCircle size={22} />
                    </button>
                </form>
                <div className={style.taskCount}>
                    <span className={style.totalTasks}>
                        Tarefas criadas
                        <span className={style.countBadge}>
                            {taskCount}
                        </span>
                    </span>
                    <span className={style.finishedTasks}>
                        Concluídas
                        <span className={style.countBadge}>
                            {
                                taskCount > 0 ?
                                    `${tasks.filter(task => task.done).length} de ${taskCount}`
                                    : 0
                            }
                        </span>
                    </span>
                </div>
                <div className={style.taskList}>
                    {
                        tasks.length > 0 ? (
                            tasks.map(task => (
                                <Task
                                    key={task.id}
                                    task={task}
                                    onDelete={deleteTask}
                                    onDone={handleDoneTask}
                                />
                            ))
                        ) : (
                            <div className={style.emptyList}>
                                <ClipboardText size={56} />
                                <h4>Você ainda não tem tarefas cadastradas</h4>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        )
                    }
                </div>
            </main>
        </div>
    )
}

export default App

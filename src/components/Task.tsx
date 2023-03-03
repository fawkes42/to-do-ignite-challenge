import { Trash } from 'phosphor-react'
import { ITask } from '../interfaces/Task';
import style from './Task.module.css'

interface TaskProps {
    task: ITask;
    onDelete: (id: string) => void;
    onDone: (id: string) => void;
}

export function Task({
    task: {
        id,
        description,
        done
    },
    onDelete,
    onDone
}: TaskProps) {
    const handleDone = () => onDone(id)
    const handleDelete = () => onDelete(id);

    return (
        <div className={style.task}>
            <div className={style.taskContent}>
                <input
                    type="checkbox"
                    className={style.checkbox}
                    checked={done}
                    onChange={handleDone}
                />
                <p>{description}</p>
            </div>
            <button type="button" onClick={handleDelete}>
                <Trash size={24} />
            </button>
        </div>
    )
}
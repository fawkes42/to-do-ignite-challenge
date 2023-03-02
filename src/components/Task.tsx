import { Trash } from 'phosphor-react'
import style from './Task.module.css'

export function Task() {
    return (
        <div className={style.task}>
            <div className={style.taskContent}>
                <input type="checkbox" className={style.checkbox} />
                <p>Estudar sobre React</p>
            </div>
            <button type="button">
                <Trash size={24} />
            </button>
        </div>
    )
}
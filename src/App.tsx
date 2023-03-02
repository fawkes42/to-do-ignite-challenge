import './globals.css'
import { Header } from "./components/Header"
import { PlusCircle, ClipboardText } from "phosphor-react";
import style from './App.module.css';

function App() {
    const tasks: string[] = [];
    return (
        <div className="App">
            <Header />
            <main className={style.content}>
                <form className={style.form}>
                    <input placeholder="Adicione uma nova tarefa" />
                    <button type="submit">
                        Criar
                        <PlusCircle size={22} />
                    </button>
                </form>
                <div className={style.taskCount}>
                    <span className={style.totalTasks}>
                        Tarefas criadas
                        <span className={style.countBadge}>
                            {0}
                        </span>
                    </span>
                    <span className={style.finishedTasks}>
                        Concluídas
                        <span className={style.countBadge}>
                            {0}
                        </span>
                    </span>
                </div>
                <div className={style.taskList}>
                    {
                        tasks.length > 0 ? null : (
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

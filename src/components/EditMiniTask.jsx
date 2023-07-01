import { useContext } from 'react';
import httpService from '../services/httpService'
import { DataStoraged } from '../App';
import '../styles/EditMiniTask.css';

function EditMiniTask({ task, idTask, changeMiniTask }) {

    const { setChangeData } = useContext(DataStoraged)

    const HandleClickChangeMiniTask = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target));
        let miniTaskEdit = httpService.getCurrentMiniTask(task, idTask);
        miniTaskEdit.task = data.description;
        miniTaskEdit.maximumDate = data.date;
        const allNewTasks = httpService.modifyMiniTask(task, idTask, miniTaskEdit);
        changeMiniTask([]);
        setChangeData(allNewTasks)
    }

    return <>
        <form className='task_edit' onSubmit={(e) => HandleClickChangeMiniTask(e)}>
            <div className='task-description_edit'>
                <label className='task_label' htmlFor={task.task}>Nombre de Tarea: </label>
                <input className='task_value' id={task.task} type='text' name="description" defaultValue={task.task} defaultChecked={task.done} />
            </div>
            <div className='task-date_edit'>
                <label className='task_label' htmlFor={idTask + task.maximumDate + "-date"}>Fecha a realizar: </label>
                <input className='task_value' type="date" name="date" defaultValue={task.maximumDate} />
            </div>
            <div className='task-submit'>
                <input type="submit" className="btn btn-add" value="Guardar" />
            </div>
        </form>
    </>
}

export default EditMiniTask;
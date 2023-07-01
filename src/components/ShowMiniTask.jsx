import { useContext } from 'react';
import httpService from '../services/httpService'
import { DataStoraged } from '../App';
import '../styles/ShowMiniTask.css'

function ShowMiniTask({task,idTask}) {

    const {setChangeData} = useContext(DataStoraged);

    const checkedMiniTask = (t)=>{
        let miniTask=httpService.getCurrentMiniTask(t,idTask);
        miniTask.done= !miniTask.done;
        const allTasks=httpService.modifyMiniTask(t,idTask,miniTask);
        setChangeData(allTasks);
    }


    return (
        <>
            <input id={task.task} className='task-description' type='checkbox' defaultChecked={task.done} onChange={() => checkedMiniTask(task)} />
            <label className='task-name' htmlFor={task.task}>{task.task}</label>
            <p>Fecha colocada: {task.maximumDate}</p>
        </>
    )

}

export default ShowMiniTask;
import { useContext } from 'react';
import httpService from '../services/httpService'
import { DataStoraged } from '../App';

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
            <input id={task.task} type='checkbox' defaultChecked={task.done} onChange={() => checkedMiniTask(task)} />
            <label htmlFor={task.task}>{task.task}</label>
            <p>Fecha colocada: {task.maximumDate}</p>
        </>
    )

}

export default ShowMiniTask;
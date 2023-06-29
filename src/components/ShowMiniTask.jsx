import httpService from '../services/httpService'

function ShowMiniTask({task,idTask}) {

    const checkedMiniTask = (t)=>{
        let miniTask=httpService.getCurrentMiniTask(t,idTask);
        miniTask.done= !miniTask.done;
        httpService.modifyMiniTask(t,idTask,miniTask);
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
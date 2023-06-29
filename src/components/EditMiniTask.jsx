import httpService from '../services/httpService'

function EditMiniTask({ task, idTask, changeMiniTask }) {

    const HandleClickChangeMiniTask = (e) =>{
        e.preventDefault();
        const data=Object.fromEntries(new FormData(e.target));
        let miniTaskEdit=httpService.getCurrentMiniTask(task,idTask);
        miniTaskEdit.task=data.description;
        miniTaskEdit.maximumDate=data.date;
        httpService.modifyMiniTask(task,idTask,miniTaskEdit);
        changeMiniTask([]);
    }

    return <>
        <form onSubmit={(e) => HandleClickChangeMiniTask(e) }>
            <label htmlFor={task.task}>Nombre de Tarea: </label>
            <input id={task.task} type='text' name="description" defaultValue={task.task} defaultChecked={task.done} />
            <label htmlFor={idTask+task.maximumDate+"-date"}>Fecha a realizar: </label>
            <input type="date" name="date" defaultValue={task.maximumDate} />
            <input type="submit" className="btn btn-add" value="Guardar" />
        </form>
    </>
}

export default EditMiniTask;
import '../styles/ItemFromList.css'
import { FaXmark, FaPencil } from "react-icons/fa6";

function ItemsFromList({ tasks, idTask }) {

    const taskEdit = (current) =>{
        console.log("Click task edit");
        console.log(current);
    }

    const taskDelete = (current) =>{
        console.log("Click task delete");
        console.log(current);
    }

    return (
        <div className="task-items">
            {
                tasks.map(task => (
                    <div className='task' key={task.task}>
                        <div className='taskOfSubject'>
                            <input id={task.task} type='checkbox' defaultChecked={task.done} />
                            <label htmlFor={task.task}>{task.task}</label>
                            <p>Fecha colocada: {task.maximumDate}</p>
                        </div>
                        <div className='icon-actions'>
                            <span className='icon e-icon' onClick={() => taskEdit(task)}><FaPencil /></span>
                            <span className='icon d-icon' onClick={() => taskDelete(task)}><FaXmark /></span>

                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ItemsFromList;
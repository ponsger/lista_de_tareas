import '../styles/ItemFromList.css'
import { FaXmark, FaPencil } from "react-icons/fa6";
import { useState } from 'react';
import ShowMiniTask from './ShowMiniTask';
import EditMiniTask from './EditMiniTask';

function ItemsFromList({ tasks, idTask }) {

    const [editMiniTask, setEditMiniTask] = useState([]);

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
                            {editMiniTask.task === task.task ? <EditMiniTask task={task} idTask={idTask} changeMiniTask={setEditMiniTask} /> : <ShowMiniTask task={task} idTask={idTask}/> }
                        </div>
                        <div className='icon-actions'>
                            <span className='icon e-icon' onClick={() => setEditMiniTask(task)}><FaPencil /></span>
                            <span className='icon d-icon' onClick={() => taskDelete(task)}><FaXmark /></span>

                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ItemsFromList;
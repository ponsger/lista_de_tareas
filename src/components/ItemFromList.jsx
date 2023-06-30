import '../styles/ItemFromList.css'
import { FaXmark, FaPencil } from "react-icons/fa6";
import { Fragment, useState } from 'react';
import ShowMiniTask from './ShowMiniTask';
import EditMiniTask from './EditMiniTask';
import ModalAdvise from './ModalAdvise';

function ItemsFromList({ tasks, idTask }) {

    const [editMiniTask, setEditMiniTask] = useState([]);
    const [deleteMiniTask,setDeleteMiniTask] = useState([]);

    const [showModalDelete,setShowModalDelete] = useState(false);

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
                            <span className='icon d-icon' onClick={() => {setShowModalDelete(true); setDeleteMiniTask(task); }}><FaXmark /></span>
                        </div>
                    </div>
                ))
            }

            {showModalDelete 
            ? <ModalAdvise closeModal={setShowModalDelete} text="¿Desea eliminar esta tarea?" id={idTask} taskDelete={deleteMiniTask} /> 
            :
             <Fragment />
             }
        </div>
    );
}

export default ItemsFromList;
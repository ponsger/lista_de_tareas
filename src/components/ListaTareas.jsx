import { Fragment, useContext, useEffect, useState } from 'react';
import '../styles/ListaTareas.css'
import ItemsFromList from './ItemFromList';
import EditSubjectTask from './EditSubjectTask';
import httpService from '../services/httpService'
import { FiTrash2, FiEdit3 } from 'react-icons/fi'
import ModalAdvise from './ModalAdvise';
import { DataStoraged } from '../App';

function ListaTareas({ data }) {

    const {setChangeData} = useContext(DataStoraged);

    const [subjectTasks, setSubjectTasks] = useState("");
    const [dataTask, setDataTask] = useState([]);

    const [subjectEdit,setSubjectEdit]=useState({});
    const [showModalDelete,setShowModalDelete] = useState(false);

    useEffect(() => {
        setDataTask(data)
    }, [data]);

    const SubjectDelete = (item,id) => {
        const allTask = data.filter(i => i.id !== item.id);
        httpService.setNewTaskToLocalStorage(allTask);
        setChangeData(allTask);
    }

    return (
        <div className="task-list-subject">
            {
                dataTask ? dataTask.map(item => (
                    <div className='task-container' key={item.id}>
                        <div className="task-subject" onClick={() => setSubjectTasks(item.id) }>
                                {subjectEdit.id ===item.id  ? <EditSubjectTask changeData={setSubjectEdit} currentSubject={item} /> :  <p className='subject' >{item.subject}</p>}
                            <div className='icon-actions'>
                                <span className='icon e-icon' onClick={() => setSubjectEdit(item)}><FiEdit3 /></span>
                                <span className='icon d-icon' onClick={() => setShowModalDelete(true)}><FiTrash2 /></span>
                                {showModalDelete ?
                                 <ModalAdvise closeModal={setShowModalDelete} 
                                text={"¿Desea eliminar este objetivo?"}
                                taskDelete={item}
                                id={item.id}
                                actionToDo={SubjectDelete}
                                /> 
                                
                                
                                : <Fragment />}
                            </div>
                        </div>
                        <div className='task-list_container'>
                            {subjectTasks === item.id ? <ItemsFromList tasks={item.list} idTask={item.id} /> : null}
                        </div>
                    </div>

                ))
                    :
                    <Fragment></Fragment>
            }
        </div>
    );

}

export default ListaTareas;
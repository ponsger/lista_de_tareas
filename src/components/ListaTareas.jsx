import { Fragment, useEffect, useState } from 'react';
import '../styles/ListaTareas.css'
import ItemsFromList from './ItemFromList';
import EditSubjectTask from './EditSubjectTask';
import { FiTrash2, FiEdit3 } from 'react-icons/fi'

function ListaTareas({ data }) {

    const [subjectTasks, setSubjectTasks] = useState("");
    const [dataTask, setDataTask] = useState([]);

    const [subjectEdit,setSubjectEdit]=useState({});
    //const [displayEdit,setDisplayEdit] = useState(false);

    useEffect(() => {
        setDataTask(data)
    }, [data]);

    const SubjectDelete = (item) => {
        const allTask = data.filter(i => i.id !== item.id);
        console.log(allTask);
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
                                <span className='icon d-icon' onClick={() => SubjectDelete(item)}><FiTrash2 /></span>
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
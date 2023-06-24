import { useState } from 'react';
import taskList from "../data/taskList";
import '../styles/ListaTareas.css'
import ItemsFromList from './ItemFromList';


function ListaTareas() {

    const [subjectTasks, setSubjectTasks] = useState("");
    
    return (
        <div className="task-list-subject">
            {
                taskList.map(item => (
                    <div className='task-container' key={item.id}>
                        <div className="task-subject" onClick={() => setSubjectTasks(item.id)}>
                            <p>{item.subject}</p>
                        </div>
                        <div className='task-list_container'>
                            {subjectTasks === item.id ? <ItemsFromList tasks={item.list} />: null }
                        </div>
                    </div>

                ))
            }
        </div>
    );

}

export default ListaTareas;
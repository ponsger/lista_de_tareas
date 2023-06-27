import { Fragment, useEffect, useState } from 'react';
import '../styles/ListaTareas.css'
import ItemsFromList from './ItemFromList';


function ListaTareas({data}) {

    const [subjectTasks, setSubjectTasks] = useState("");
    const [dataTask, setDataTask]=useState([]);

    useEffect(()=>{
            setDataTask(data)
    },[data]);

    
    return (
        <div className="task-list-subject">
            {
                dataTask ? dataTask.map(item => (
                    <div className='task-container' key={item.id}>
                        <div className="task-subject" onClick={() => setSubjectTasks(item.id)}>
                            <p>{item.subject}</p>
                        </div>
                        <div className='task-list_container'>
                            {subjectTasks === item.id ? <ItemsFromList tasks={item.list} />: null }
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
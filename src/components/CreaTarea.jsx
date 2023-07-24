import { useState, Fragment, useContext } from 'react';
import '../styles/CreaTarea.css'
import Tarea from './Tarea';
import jsonService from '../services/jsonService'
import httpService from '../services/httpService'
import { DataStoraged } from '../App';

function CreaTarea({ subject }) {

    const [count, setCount] = useState(0)
    const [arrayElements, setArray] = useState([]);
    const {setChangeData} = useContext(DataStoraged);

    const AgregaTarea = (event) => {
        event.preventDefault()
        setCount(count + 1)
        const helper = [...arrayElements]
        helper.push(count + 1);
        setArray(helper);
    }

    const ObtieneDatos = (e) => {
        e.preventDefault();
        const data =Object.fromEntries(new FormData(e.target));
        const dataConverted=jsonService.convertDataToJson(data);
        const allNewTasks=GetAndSetFromLocalStorage(dataConverted);
        setChangeData(allNewTasks);
        EraseForm(e);
        setArray([]);
    }

    const GetAndSetFromLocalStorage = (data) => {
        let tasks =httpService.getTaskFromLocalStorage();
        if(!tasks)
            tasks=[];
        tasks.push(data);
        httpService.setNewTaskToLocalStorage(tasks);
        return tasks;
    }

    const EraseForm = (data) =>{
        for(let element of data.target ){
            element.value="";
        }
    }

    return (
        <div className="create-task">
            <div className="create-task_close">
                <p className='close-X' onClick={() => subject(false)}>X</p>
            </div>
            <div className="create-task_form">
                <form className='' onSubmit={(e) => ObtieneDatos(e)}>
                    <div className='subject-grupo'>
                        <label htmlFor='subject'>Objetivo Principal:</label>
                        <input type='text' className='field' id='subject' name='subject' />
                    </div>
                    <div>
                        {arrayElements ? arrayElements.map(i => (<Tarea key={i} clave={i} />)) : <Fragment />}
                    </div>

                    <div className='container-button'>
                        <button className='btn btn-add' onClick={e => AgregaTarea(e)}>Agrega Tareas</button>
                        <input className='btn btn-create' type='submit' value="Crear Objetivo" />
                    </div>

                </form>
            </div>
        </div>
    );
}

export default CreaTarea;
import '../styles/Tarea.css'

function Tarea({clave,colocaDato}) {

    return (
        <div className='newTask' key={clave}>
            <div className='task-element'>
                <label htmlFor={'task-'+clave}>Nombre de Tarea: </label>
                <input id={'task-'+clave} className='field' type="text" name={'name-'+clave}  />
            </div>
            <div className='task-element'>
                <label htmlFor={'date-'+clave}>Fecha a realizar: </label>
                <input id={'date-'+clave} className='field' type="date" name={'date-'+clave} />
            </div>
        </div>
    );
}

export default Tarea;
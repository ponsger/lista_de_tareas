import '../styles/ItemFromList.css'

function ItemsFromList({tasks}){

    return(
        <div className="task-items">
            {
                tasks.map( task=>(
                    <div className='task' key={task.task}>
                        <input id={task.task} type='checkbox' defaultChecked={task.done} />
                        <label htmlFor={task.task}>{task.task}</label>
                    </div>
                ))
            }
        </div>
    );
}

export default ItemsFromList;
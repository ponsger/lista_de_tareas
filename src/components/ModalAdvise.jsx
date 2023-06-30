import '../styles/ModalAdvise.css'

function ModalAdvise({ closeModal, text,taskDelete,id,actionToDo }) {


    const ActionToDoTask = () =>{

        actionToDo(taskDelete,id);
        closeModal(false);
    }


    return (
        <div className="modal">
            <div className='modalBody'>
                <div className="modal-top">
                    <p className='icon d-icon' onClick={() => closeModal(false)}>X</p>
                </div>
                <div className="modal-body">
                    <p >{text}</p>
                    <div className='modal-buttons'>
                        <button className='btn btn-info' onClick={() => closeModal(false)}>Cancelar</button>
                        <button className='btn btn-delete' onClick={() => ActionToDoTask()}>Eliminar</button>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default ModalAdvise;
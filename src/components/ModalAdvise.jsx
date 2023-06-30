import '../styles/ModalAdvise.css'
import httpService from '../services/httpService'

function ModalAdvise({ closeModal, text,taskDelete,id }) {

    const DeleteTask = () =>{
        httpService.removeMiniTask(taskDelete,id);
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
                        <button className='btn btn-delete' onClick={() => DeleteTask()}>Eliminar</button>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default ModalAdvise;
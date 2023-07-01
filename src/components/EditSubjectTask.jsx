import { Fragment } from "react";
import httpService from '../services/httpService';
import '../styles/EditSubjectTask.css';

function EditSubjectTask({ currentSubject,changeData }) {


    const HandleSaveSubject = (e) => {
        e.preventDefault();
        const formData=Object.fromEntries(new FormData(e.target));
        currentSubject.subject=formData.newSubject;
        let dataLocal=httpService.getTaskFromLocalStorage();
        const index=dataLocal.findIndex( task => task.id===currentSubject.id);
        dataLocal = dataLocal.with(index,currentSubject);
        httpService.setNewTaskToLocalStorage(dataLocal);
        changeData({});
    }

    return (
        <Fragment>
            <form className="subject-form" onSubmit={(e)=> HandleSaveSubject(e)}>
                <input type="text" className="subject-tittle" name="newSubject" defaultValue={currentSubject.subject} />
                <input type="submit" className="btn btn-add submit_button" value='Guardar' />
            </form>

        </Fragment>
    )


}

export default EditSubjectTask;
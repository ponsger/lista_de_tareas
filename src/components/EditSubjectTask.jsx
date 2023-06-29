import { Fragment, useContext } from "react";
import httpService from '../services/httpService'
import {DataHasChange} from '../App'

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
            <form onSubmit={(e)=> HandleSaveSubject(e)}>
                <input type="text" name="newSubject" defaultValue={currentSubject.subject} />
                <input type="submit" className="btn btn-add" value='Guardar' />
            </form>

        </Fragment>
    )


}

export default EditSubjectTask;
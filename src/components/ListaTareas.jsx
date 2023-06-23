import { Component, Fragment } from "react";
import taskList from "../data/taskList";

class ListaTareas extends Component {

    render() {
        return (
            <Fragment>
                {
                    taskList.map(item => (
                        <div key={item.id}>
                            <p>{item.subject}</p>
                        </div>
                    ))
                }
            </Fragment>
        );
    }

}

export default ListaTareas;
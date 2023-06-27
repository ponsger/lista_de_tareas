import uuid from "react-uuid";

class JsonService{

    convertDataToJson(data){
        let datos={};
        let list={};
        const tasks= getTasksFromData(data);
        const dates = getDatesFromData(data);
        list=addTaskAndDates(tasks,dates);
        datos.list=list;
        datos.id=uuid();
        console.log(datos.id);
        datos.subject= data["subject"];
        return datos;
    }
}

function addTaskAndDates(names, dates){
    let list=[]
    for(let i =0 ; i<names.length;i++){
        list.push({
            "task":names[i],
            "maximumDate" : dates[i],
            "setDate" : new Date().toLocaleDateString(),
            "done" : false
        });
    }
    return list;
}

function getTasksFromData(d){
    let counter=1;
    let tasksName=[]
    while(d["name-"+counter]){
        tasksName.push(d["name-"+counter]);
        counter++;
    }
    return tasksName;
}

function getDatesFromData(d){
    let counter=1;
    let tasksDates=[]
    while(d["date-"+counter]){
        tasksDates.push(d["date-"+counter]);
        counter++;
    }
    return tasksDates;
}


let instance = new JsonService();
export default instance;
import taskList from '../data/taskList'
class HttpService{
    
    async getPhrase(){
         const getPhrase= await fetch("https://zenquotes.io/api/today").then(response => response.json());
         return getPhrase;
    }

    getFromLocalStorage(){
        const data=localStorage.getItem('tareas');
        const jsonData=JSON.parse(data);
        if(jsonData)
            return jsonData;
        return taskList
    }

    getTaskFromLocalStorage(){
        const data=localStorage.getItem('tareas');
        const jsonData=JSON.parse(data);
        return jsonData;
    }

    setNewTaskToLocalStorage(data){
        const stringData=JSON.stringify(data);
        localStorage.setItem('tareas',stringData);
    }

    setToLocalStorage(data){
        const subject=` "subject" : ${JSON.stringify(data[0])}`;
        const list=` "list" : ${JSON.stringify(data.list)}`;
        const dataConcat=` [{${subject.concat(","+list)}}]`;
        localStorage.setItem('tareas',dataConcat);
    }

}

const instance = new HttpService();
export default instance;
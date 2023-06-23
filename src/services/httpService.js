
class HttpService{
    
    getPhrase(){
         const getPhrase= fetch("https://zenquotes.io/api/today").then(response => response.json());
         return getPhrase;
    }

    

}

const instance = new HttpService();
export default instance;
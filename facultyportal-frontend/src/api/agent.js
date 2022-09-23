import axios from "axios";

const baseURL = 'http://localhost:3000/api/'

function APIReturn(url = baseURL) {
    return {
        fetchAll: () => axios.get(url),
        fetchById: Id => axios.get(url+Id),
        // create: newRecord => axios.post(url,newRecord),
        // update: (Id, updateRecord) => axios.put(url+Id, updateRecord),
        // delete: id => axios.delete(url)
    }
}

export default APIReturn
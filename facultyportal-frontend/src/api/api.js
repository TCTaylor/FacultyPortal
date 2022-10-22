import axios from "axios";

//const baseURL = 'https://localhost:7078/api/'

//function APIReturn(url = baseURL) {
//     const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// const requests = {
//   get: <T>(url: string) => axios.get<T>(url).then(responseBody),
//   post: <T>(url: string, body?: {}) =>
//     axios.post<T>(url, body).then(responseBody),
//   put: <T>(url: string, body?: {}) =>
//     axios.put<T>(url, body).then(responseBody),
//   del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
// };
//    return {
//        fetchAll: () => axios.get(url),
//        fetchById: Id => axios.get(url+Id),
//        // create: newRecord => axios.post(url,newRecord),
//        // update: (Id, updateRecord) => axios.put(url+Id, updateRecord),
//        // delete: id => axios.delete(url)
//    }
//}

//export default APIReturn
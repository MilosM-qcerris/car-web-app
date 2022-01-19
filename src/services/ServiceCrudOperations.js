import axios from "axios";

const API_URL = 'http://localhost:8087/api/';

class UserCrudOperations {

    createUser(user){
        return axios.post(API_URL + "registration", user);
    }

}
export default new UserCrudOperations();
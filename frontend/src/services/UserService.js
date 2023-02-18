import axios from 'axios';

//Axios est une bibliothèque JavaScript populaire pour effectuer des requêtes HTTP depuis le navigateur ou Node.js. Il est souvent utilisé dans les applications React pour effectuer des appels à des API distantes.
const USER_API_BASE_URL = "http://localhost:8080/api/users";

//Création de notre service USER qui permet de réaliser les opérations CRUD sur notre BDD
class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    updateUser(user, userId){
        return axios.put(USER_API_BASE_URL + '/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new UserService()
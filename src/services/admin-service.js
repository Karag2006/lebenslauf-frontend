import axios from "axios";
import authHeader from "./auth-header"

const API_URL = 'http://localhost:3000/api/admin/'

class AdminService {
    getAdminView() {
        return axios.get(API_URL + 'lebenslauf', {headers: authHeader()})
    }
}

export default new AdminService()
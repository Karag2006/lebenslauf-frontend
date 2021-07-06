import axios from "axios";
import authHeader from "./auth-header"

const API_URL = process.env.VUE_APP_APIURL + 'api'

class AdminService {
    getAdminView() {
        return axios.get(API_URL + '/', {headers: authHeader()})
    }
    editValue(obj) {
        return axios.patch(
            API_URL + "/" + "0",
            obj,
            { headers: authHeader() }
        );
    }
    addItem(obj) {
        return axios.post(API_URL + "/" + "0", obj, { headers: authHeader() });
    }
    remItem(obj) {
        return axios.delete(API_URL + "/0?location=" + obj.location + "&itemId=" + obj.itemId, { headers: authHeader() });
    }
}

export default new AdminService()
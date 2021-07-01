import AdminService from '../services/admin-service'
import router from '../router/index'

export const cv = {
    namespaced: true,
    state: {
        lebenslauf: {}
    },
    actions: {
        initStore({ state, commit }) {
            if (!state.lebenslauf['intro']) {
                AdminService.getAdminView()
                    .then((response) => {
                        commit('SET_LEBENSLAUF', response.data)
                    })
            }
        },
        updateLebenslauf(context, arr) {
            let obj = {}
            obj.ident = "0";
            obj.values = arr;
            AdminService.editValue(obj)
                .then(() => {
                    context.commit('UPDATE_LEBENSLAUF', obj.values)
                })
                .catch((error) => {
                    if (error.response.status == 403) {
                        this.dispatch("auth/logout", null, {root:true});
                        router.push("/admin/login");
                    } else {
                        console.log(error.response);
                    }
                }) 
        }
    },
    mutations: {
        SET_LEBENSLAUF(state, lebenslauf) {
            state.lebenslauf = lebenslauf
        },
        UPDATE_LEBENSLAUF(state, arr) {
            arr.forEach(obj => {
                let string = obj.location;
                let items = string.split(".");
                let len = items.length;
                let position = state.lebenslauf;
                for (let i = 0; i < len - 1; i++) {
                    let elem = items[i];
                    if (!position[elem]) position[elem] = {};
                    position = position[elem];
                }
                position[items[len - 1]] = obj.value;
            });
            
        }
    },
    getters: {
        lebenslauf: state => state.lebenslauf,
        lebenslaufItem(state) {
            return (value) => {
                let string = value;
                let items = string.split(".");
                let len = items.length;
                let position = state.lebenslauf;
                for (let i = 0; i < len - 1; i++) {
                    let elem = items[i];
                    if (!position[elem]) position[elem] = {};
                    position = position[elem];
                }
                return position[items[len - 1]];
            }
        } 
    }
    

}
import AdminService from '../services/admin-service'
import router from '../router/index'

export const cv = {
           namespaced: true,
           state: {
               lebenslauf: {},
           },
           actions: {
               initStore({ state, commit }) {
                   if (!state.lebenslauf["intro"]) {
                       AdminService.getAdminView().then((response) => {
                           commit("SET_LEBENSLAUF", response.data);
                       });
                   }
               },
               updateLebenslauf(context, arr) {
                   let obj = {};
                   obj.ident = "0";
                   obj.values = arr;
                   AdminService.editValue(obj)
                       .then(() => {
                           context.commit("UPDATE_LEBENSLAUF", obj.values);
                       })
                       .catch((error) => {
                           if (error.response.status == 403) {
                               this.dispatch("auth/logout", null, {
                                   root: true,
                               });
                               router.push("/admin/login");
                           } else {
                               console.log(error.response);
                           }
                       });
               },
               addToLebenslauf(context, obj) {
                   obj.ident = "0";
                   AdminService.addItem(obj)
                       .then(() => {
                           context.commit("ADD_TO_LEBENSLAUF", obj);
                       })
                       .catch((error) => {
                           if (error.response.status == 403) {
                               this.dispatch("auth/logout", null, {
                                   root: true,
                               });
                               router.push("/admin/login");
                           } else {
                               console.log(error.response);
                           }
                       });
               },
               removeFromLebenslauf(context, obj) {
                   obj.ident = "0";
                   AdminService.remItem(obj)
                       .then(() => {
                           context.commit("REM_FROM_LEBENSLAUF", obj);
                       })
                       .catch((error) => {
                           if (error.response.status == 403) {
                               this.dispatch("auth/logout", null, {
                                   root: true,
                               });
                               router.push("/admin/login");
                           } else {
                               console.log(error.response);
                           }
                       });
               },
           },
           mutations: {
               SET_LEBENSLAUF(state, lebenslauf) {
                   state.lebenslauf = lebenslauf;
               },
               UPDATE_LEBENSLAUF(state, arr) {
                   arr.forEach((obj) => {
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
               },
               ADD_TO_LEBENSLAUF(state, obj) {
                   let string = obj.location;
                   let items = string.split(".");
                   let len = items.length;
                   let position = state.lebenslauf;
                   for (let i = 0; i < len - 1; i++) {
                       let elem = items[i];
                       if (!position[elem]) position[elem] = {};
                       position = position[elem];
                   }
                   position[items[len - 1]].push(obj.item);
               },
               REM_FROM_LEBENSLAUF(state, obj) {
                   let string = obj.location;
                   let items = string.split(".");
                   // location is pointing to the element instead of the array the element is in
                   // so we need to remove the last item in the items array to get the targeted array.
                   items.splice(items.length - 1, 1);
                   let len = items.length;
                   let position = state.lebenslauf;
                   for (let i = 0; i < len - 1; i++) {
                       let elem = items[i];
                       if (!position[elem]) position[elem] = {};
                       position = position[elem];
                   }
                   position[items[len - 1]].splice(obj.itemId, 1)
                   for (let i = 0; i < position[items[len - 1]].length; i++) {
                       position[items[len - 1]][i].id = i;
                   }
               },
           },
           getters: {
               lebenslauf: (state) => state.lebenslauf,
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
                   };
               },
           },
       };
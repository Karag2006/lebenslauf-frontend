<template>
    <div v-if="!loggedIn" class="text--item">
        <p class="text--item--title">{{item.title}} : </p>
        <p class="text--item--content">{{item.content}} </p>
    </div>
    <div v-else-if="!editmode" class="text--item clickable" @click="edit">
        <p class="text--item--title">{{item.title}} : </p>
        <p class="text--item--content">{{item.content}}</p> 
    </div>
    <edit-item
            v-else
            :names="['title','content']"
            :location="location"
            :values="item"
            v-on:cancel="cancel"
            v-on:changed="cancel"
        ></edit-item>
</template>

<script>

import editItem from '../admin/edit/editItem.vue'

export default {
    components: {
        editItem,
    },
    props:{
        item: Object,
        location: String,
        loggedIn: Boolean
    },
    data() {
        return {
            editmode: false,
        }
    },
    computed: {
        values(){
            let temp = []
            let i = 0;
            Object.keys(this.item).forEach(element => {
                if (element != "id" && element != "_id") {
                    temp[i] = {
                        "location": this.location + "." + element, 
                        "value": this.item[element]
                    }
                    i++;
                }
            });
            return temp
        }
    },
    methods: {
        edit(){
            this.editmode = true;
        },
        cancel(){
            this.editmode = false;
        }
    },
}
</script>
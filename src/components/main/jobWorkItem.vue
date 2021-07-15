<template>
    <li v-if="!loggedIn"> {{item.text}} </li>
    <li v-else-if="!editmode" class="clickable" @click="edit"> {{item.text}} </li>
    <edit-item 
        v-else
        :names="['text']"
        :location="location"
        :values="item"
        :deletable="true"
        @cancel="cancel"
        @changed="cancel"
    ></edit-item>
</template>

<script>
import editItem from '../admin/edit/editItem.vue'

export default {
    components:{
        editItem
    },
    props:{
        item: Object,
        location: String,
        loggedIn: Boolean
    },
    data() {
        return {
            editmode: false
        }
    },
    methods: {
        edit(){
            this.editmode = true
        },
        cancel(){
            this.editmode = false
        }
    },
}
</script>
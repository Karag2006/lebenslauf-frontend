<template>
    <div class="school">
        <h4 v-if="!loggedIn" class="school--title"> {{item.title}} </h4>
        <h4 v-else-if="!editmode" class="clickable school--title" @click="edit"> {{item.title}} </h4>
        <edit-item
            v-else
            :names="['title']"
            :values="item"
            :location="location"
            @cancel="cancel"
            @changed="cancel"
        ></edit-item>
        <school-item
            v-for="schoolItem in item.schoolItems"
            :key="schoolItem.id"
            :item="schoolItem"
            :location="location + '.schoolItems.' + schoolItem.id"
            :loggedIn="loggedIn"
        ></school-item>
    </div>
</template>

<script>
import schoolItem from './schoolItem.vue'
import editItem from '../admin/edit/editItem.vue'

export default {
    components:{
        schoolItem,
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
<template>
    <div class="studies">
        <h4 v-if="!loggedIn" class="studies--title"> {{item.title}} </h4>
        <h4 v-else-if="!editmode" class="clickable studies--title" @click="edit"> {{item.title}} </h4>
        <edit-item 
            v-else
            :location="location"
            :names="['title']"
            :values="item"
            @cancel="cancel"
            @changed="cancel"
        ></edit-item>
        <studies-item
            v-for="studyItem in item.studiesItems"
            :key="studyItem.id"
            :item="studyItem"
            :location="location + '.studiesItems.' + studyItem.id"
            :loggedIn="loggedIn"
        ></studies-item>
    </div>
</template>

<script>
import studiesItem from './studiesItem.vue'
import editItem from '../admin/edit/editItem.vue'
export default {
    components: {
        studiesItem,
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
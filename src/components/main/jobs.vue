<template>
    <div class="jobs">
        <h4 v-if="!loggedIn" class="jobs--title"> {{item.title}} </h4>
        <h4 v-else-if="!editmode" class="clickable jobs--title" @click="edit"> {{item.title}} </h4>
        <edit-item
            v-else
            :names="['title']"
            :location="location"
            :values="item"
            v-on:cancel="cancel"
            v-on:changed="changedItem"
        ></edit-item>
        <job-item
            v-for="job in item.jobItems"
            :key="job.id"
            :item="job"
            :location="location + '.jobItems.' + job.id"
            :loggedIn="loggedIn"
        ></job-item>
    </div>
</template>

<script>
import jobItem from './jobItem.vue'
import editItem from '../admin/edit/editItem.vue'
export default {
    components: {
        jobItem,
        editItem
    },
    props: {
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
        },
        changedItem() {
            this.editmode = false;
        },

    },
}
</script>
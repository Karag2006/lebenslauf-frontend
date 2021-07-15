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
        <job-items
            :items=item.jobItems
            :location="location + '.jobItems'"
            :loggedIn="loggedIn"
        ></job-items>
    </div>
</template>

<script>
import jobItems from './jobItems.vue'
import editItem from '../admin/edit/editItem.vue'
export default {
    components: {
        jobItems,
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
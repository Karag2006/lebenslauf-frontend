<template>
    <div v-if="item.col == col" class="abilities--group">
        <h3 v-if="!loggedIn" class="abilities--group--title"> {{item.title}} </h3>
        <h3 v-else-if="!editmode" class="clickable abilities--group--title" @click="edit"> {{item.title}} </h3>
        <edit-item
            v-else
            :names="['title']"
            :location="location"
            :values="item"
            :deletable="true"
            v-on:cancel="cancel"
            v-on:changed="changedItem"
        ></edit-item>
        <skill-items
            :items="item.items"
            :location="location + '.items'"
            :loggedIn="loggedIn"    
        ></skill-items>
    </div>
</template>

<script>
import skillItems from './skillItems.vue'
import editItem from '../admin/edit/editItem.vue'

export default {
    components:{
        skillItems,
        editItem
    },
    props:{
        item: Object,
        location: String,
        loggedIn: Boolean,
        col: Number
    },
    data() {
        return {
            editmode: false
        }
    },
    methods: {
        edit() {
            if (this.loggedIn) {
                this.editmode = true;
            }
        },
        changedItem() {
            this.editmode = false;
        },
        cancel() {
            this.editmode = false;
        },
    },
}
</script>
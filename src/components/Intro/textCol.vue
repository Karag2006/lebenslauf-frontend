<template>
    <div class="col">
        <h1 v-if="!loggedIn" class="title">{{title}}</h1>
        <h1 v-else-if="!editmode" class="title clickable" @click="editTitle">{{title}}</h1>
        <edit-title v-else :title="title" v-on:cancel="cancel" :location="location + '.title'" v-on:changed="changedItem"></edit-title>
        <intro-items :items="items"></intro-items>
    </div>
</template>

<script>
import introItems from './items.vue'
import editTitle from '../admin/edit/editTitle.vue'

export default {
    components:{
        introItems,
        editTitle
    },
    data() {
        return {
            editmode: false
        }
    },
    props:{
        title: String,
        items: Array,
        loggedIn: Boolean,
        location: String
    },
    methods: {
        editTitle(){
            if (this.loggedIn)
            {
                this.editmode = true;
            }
        },
        changedItem(){
            this.editmode = false;
        },
        cancel(){
            this.editmode = false;
        }
    },
}
</script>
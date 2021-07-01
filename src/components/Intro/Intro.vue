<template>
    <div class="intro row">
        <div class="col">
            <h1 v-if="!loggedIn" class="title">{{intro.title}}</h1>
            <h1 v-else-if="!editmode" class="title clickable" @click="edit">{{intro.title}}</h1>
            <edit-title 
                v-else 
                :title="intro.title" 
                v-on:cancel="cancel" 
                :location="location + '.title'" 
                v-on:changed="changedItem">
            </edit-title>

            <intro-items 
                :items="intro.items" 
                :location="location + '.items'"
                :loggedIn="loggedIn"
            ></intro-items>
        </div>
        <image-col :image="intro.image" :loggedIn="loggedIn"></image-col>
    </div>
</template>

<script>
import introItems from './items.vue'
import editTitle from '../admin/edit/editTitle.vue'

import imageCol from './imageCol.vue'

export default {
    components: {
        introItems,
        editTitle,
        imageCol
    },
    
    props:{
        intro: Object,
        loggedIn: Boolean,
        location: String
    },
    data() {
        return {
            editmode: false
        }
    },
    methods: {
        edit(){
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
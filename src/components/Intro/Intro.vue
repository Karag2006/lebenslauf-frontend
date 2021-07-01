<template>
    <div class="intro row">
        <div class="col">
            <h1 v-if="!loggedIn" class="title">{{item.title}}</h1>
            <h1 v-else-if="!editmode" class="title clickable" @click="edit">{{item.title}}</h1>
            <edit-item 
                v-else 
                :names="['title']"
                :location="location"
                :values="item"
                v-on:cancel="cancel"
                v-on:changed="changedItem">
            </edit-item>

            <intro-items 
                :items="item.items" 
                :location="location + '.items'"
                :loggedIn="loggedIn"
            ></intro-items>
        </div>
        <image-col :image="item.image" :loggedIn="loggedIn"></image-col>
    </div>
</template>

<script>
import introItems from './items.vue'
import editItem from '../admin/edit/editItem.vue'

import imageCol from './imageCol.vue'

export default {
    components: {
        introItems,
        editItem,
        imageCol
    },
    
    props:{
        item: Object,
        loggedIn: Boolean,
        location: String
    },
    data() {
        return {
            editmode: false
        }
    },
    computed: {
        
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
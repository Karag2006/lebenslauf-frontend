<template>
    <div class="job--work--group--container">
        
        <job-work-item
            v-for="currentItem in items"
            :key="currentItem.id"
            :item="currentItem"
            :location="location + '.' + currentItem.id"
            :loggedIn="loggedIn"    
        ></job-work-item>
        <div v-if="loggedIn && !showAddForm" class="add_btn btn" @click="addForm"><i class="fas fa-plus"></i> Aufgabe</div>
        <add-item 
            v-else-if="loggedIn && showAddForm"
            :values="itemToAdd"
            :location="location"
            @cancel="cancel"
            @added="cancel"
        ></add-item>
    </div>
</template>

<script>
import jobWorkItem from './jobWorkItem.vue'
import addItem from '../admin/edit/addItem.vue'


export default {
    components:{
        jobWorkItem,
        addItem
    },
    props:{
        items: Array,
        location: String,
        loggedIn: Boolean,
    },
    data() {
        return {
            showAddForm: false,
        }
    },
    computed: {
        itemToAdd(){
            return {
                id: this.items.length,
                text: "",
            }
        }
    },
    methods: {
        addForm(){
            this.showAddForm = true
        },
        cancel() {
            this.showAddForm = false;
        },
    },
}
</script>
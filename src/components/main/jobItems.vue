<template>
    <div class="job--group--container">
        <div v-if="loggedIn && !showAddForm" class="add_btn btn" @click="addForm"><i class="fas fa-plus"></i> Job</div>
        <add-item 
            v-else-if="loggedIn && showAddForm"
            :values="itemToAdd"
            :location="location"
            @cancel="cancel"
            @added="cancel"
        ></add-item>
        <job-item
            v-for="currentItem in items"
            :key="currentItem.id"
            :item="currentItem"
            :location="location + '.' + currentItem.id"
            :loggedIn="loggedIn"    
        ></job-item>
        
    </div>
</template>

<script>
import jobItem from './jobItem.vue'
import addItem from '../admin/edit/addItem.vue'


export default {
    components:{
        jobItem,
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
                institution: "",
                timeFrame: "",
                occupation: "",
                work: [],
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
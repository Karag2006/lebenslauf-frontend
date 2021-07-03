<template>
    <div class="jobs--item">
        <div v-if="!loggedIn" class="jobs--item--head">
            <p>{{item.institution}} / <span class="accent">{{item.timeFrame}}</span></p>
            <p>{{item.occupation}}</p>
        </div>
        <div v-else-if="!editmode" class="clickable jobs--item--head" @click="edit">
            <p>{{item.institution}} / <span class="accent">{{item.timeFrame}}</span></p>
            <p>{{item.occupation}}</p>
        </div>
        <edit-item 
            v-else
            :names="['institution', 'timeFrame', 'occupation']"
            :values="item"
            :location="location"
            v-on:cancel="cancel"
            v-on:changed="cancel"
        ></edit-item>
        <ul>
            <job-work-item
                v-for="workItem in item.work"
                :key="workItem.id"
                :item="workItem"
                :location="location + '.work.' + workItem.id"
                :loggedIn="loggedIn"
            ></job-work-item>
        </ul>
    </div>
</template>

<script>
import jobWorkItem from './jobWorkItem.vue'
import editItem from '../admin/edit/editItem.vue'

export default {
    components:{
        jobWorkItem,
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
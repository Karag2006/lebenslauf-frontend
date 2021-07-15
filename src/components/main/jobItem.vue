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
            :deletable="true"
            v-on:cancel="cancel"
            v-on:changed="cancel"
        ></edit-item>
        <ul>
            <job-work-items
                :items=item.work
                :location="location + '.work'"
                :loggedIn="loggedIn"
            ></job-work-items>
        </ul>
    </div>
</template>

<script>
import jobWorkItems from './jobWorkItems.vue'
import editItem from '../admin/edit/editItem.vue'

export default {
    components:{
        jobWorkItems,
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
<template>
    <div class="studies--item">
        <div v-if="!loggedIn" class="studies--item--head">
            <p>{{item.institution}} / <span class="accent">{{item.timeFrame}}</span></p>
        </div>
        <div v-else-if="!editmode" class="clickable studies--item--head" @click="edit">
            <p>{{item.institution}} / <span class="accent">{{item.timeFrame}}</span></p>
        </div>
        <edit-item 
            v-else
            :names="['institution', 'timeFrame']"
            :values="item"
            :location="location"
            @cancel="cancel"
            @changed="cancel"
        ></edit-item>
        <ul>
            <studies-subject
                v-for="subjectItem in item.subjects"
                :key="subjectItem.id"
                :item="subjectItem"
                :location="location + '.subjects.' + subjectItem.id"
                :loggedIn="loggedIn"
            ></studies-subject>
        </ul>
    </div>
</template>

<script>
import studiesSubject from './studiesSubject.vue'
import editItem from '../admin/edit/editItem.vue'

export default {
    components:{
        studiesSubject,
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
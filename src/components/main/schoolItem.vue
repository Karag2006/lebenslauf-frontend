<template>
    <div v-if="!loggedIn" class="school--item">
        <div class="school--item--head">
            <p>{{item.institution}}<br><span class="accent">{{item.timeFrame}}</span></p>
        </div>
        <ul>
            <li>{{item.class}}</li>
        </ul>
    </div>
    <div v-else-if="!editmode" class="clickable school--item" @click="edit">
        <div class="school--item--head">
            <p>{{item.institution}}<br><span class="accent">{{item.timeFrame}}</span></p>
        </div>
        <ul>
            <li>{{item.class}}</li>
        </ul>
    </div>
    <edit-item 
        v-else
        :names="['institution', 'timeFrame', 'class']"
        :values="item"
        :location="location"
        @cancel="cancel"
        @changed="cancel"
    ></edit-item>
</template>

<script>
import editItem from '../admin/edit/editItem.vue'

export default {
    components:{
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
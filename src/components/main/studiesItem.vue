<template>
    <div class="studies--item">
        <p>{{item.institution}} / <span class="accent">{{item.timeFrame}}</span></p>
        <ul>
            <studies-subject
                v-for="subjectItem in item.subjects"
                :key="subjectItem.id"
                :item="subjectItem"
            ></studies-subject>
        </ul>
    </div>
</template>

<script>
import studiesSubject from './studiesSubject.vue'

export default {
    components:{
        studiesSubject
    },
    props:{
        item: Object
    }
}
</script>
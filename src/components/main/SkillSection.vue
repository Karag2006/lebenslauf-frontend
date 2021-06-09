<template>
    <div class="abilities">
        <h2 class="subtitle">{{skills.skillTitle}}</h2>
        <div class="row">
            <div class="col">
                <skill-category 
                    v-for="skillGroup in col1"
                    :key="skillGroup.id"
                    :skillGroup="skillGroup">
                </skill-category>
            </div>
            <div class="col">
                <skill-category 
                    v-for="skillGroup in col2"
                    :key="skillGroup.id"
                    :skillGroup="skillGroup">
                </skill-category>
            </div>
        </div>
    </div>
</template>

<script>
import skillCategory from './skillCategory.vue'
export default {
    components:{
        skillCategory
    },
    props:{
        skills: Object
    },
    computed: {
        col1: function(){
            let result = this.skills.skillCategories.filter(obj => {
                return obj.col === 1
            })
            return result
        },
        col2: function(){
            let result = this.skills.skillCategories.filter(obj => {
                return obj.col === 2
            })
            return result
        }       
    },
}
</script>
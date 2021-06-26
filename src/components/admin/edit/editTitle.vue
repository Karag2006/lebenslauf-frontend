<template>
    <div>
        <input-field
            v-model="title"
            :name="'title'"
            :Label="'title'"
            :type="'text'"    
        ></input-field>
    </div>
</template>

<script>
import inputField from '../inputs/inputField.vue'

export default {
    components: {
        inputField
    },
    props: {
        title: String
    },
    
}
</script>
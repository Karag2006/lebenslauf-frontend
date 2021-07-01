<template>
    <div class="form-group">
        <select class="form-control" v-model="internalValue">
            <option v-for="item in options" :value="item" :key="item">
                {{item}}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    props: ['value', 'options'],
    mounted() {},
    data() {
        return {
            internalValue: this.value
        }
    },
    methods: {
        test(){
            this.$emit('newSelect', this.internalValue)
        }
    },
    watch: {
        internalValue: function(){
            this.$emit("input", this.internalValue)
        }
    },
};
</script>

<style scoped>
.form-group{
    padding: 0.5em 0;
}
.form-group input{
    width: 100%;
    font-size: 1.2rem;
}
</style>
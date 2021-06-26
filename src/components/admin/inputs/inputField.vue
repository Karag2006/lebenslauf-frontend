<template>
    <div class="form-group">
        <input
            v-bind:value="value"
            :type="type"
            :name="name"
            :placeholder="Label"
            class="form-control"
            v-on:input="$emit('input', $event.target.value)"
        />
        
    </div>
</template>

<script>
export default {
    props: ['value', 'type', 'Label', 'name'],
    mounted() {}
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
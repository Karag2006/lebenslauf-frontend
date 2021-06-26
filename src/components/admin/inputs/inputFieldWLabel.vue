<template>
    <div class="form-group">
        <label :for="name">{{Label}} :</label>
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
    display: flex;
    align-items: center;
    align-content: space-between;
    padding: 0.5em 0;
}
.form-group label{
    text-align: left;
    padding-right: 1em;
}
.form-group label,
.form-group input{
    width: 30%
}
</style>
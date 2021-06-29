<template>
    <div class="functionBtn">
        <i :class="iconClass"></i>
    </div>
</template>

<script>
export default {
    props:{
        type: String
    },
    computed: {
        iconClass(){
            let value = ''
            switch(this.type) {
                case 'submit':
                    value = 'far fa-save'
                    break
                case 'cancel':
                    value = 'fas fa-times'
                    break
                case 'add':
                    value = 'fas fa-plus'
                    break
            }
            return value
        }
    },
}
</script>

<style>
.functionBtn {
    margin: 0.25em 0;
    margin-left: .5em;
    display: inline-block;
    color: white;
    font-weight: 900;
    padding: 0.25em 0.75em;
    background-color: var(--text-color-accent);
    border-radius: 100px;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2rem;

}
</style>
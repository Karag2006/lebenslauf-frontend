<template>
    <div class="text--item">
        <p class="text--item--title">{{item.title}} : </p>
        <p class="text--item--content"> {{item.content}} </p>
    </div>
</template>

<script>
export default {
    props:{
        item: Object
    }
}
</script>
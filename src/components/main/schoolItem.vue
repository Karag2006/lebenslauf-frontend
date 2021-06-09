<template>
    <div class="studies--item">
        <p>{{item.institution}}<br><span class="accent">{{item.timeFrame}}</span></p>
        <ul>
            <li>{{item.class}}</li>
        </ul>
    </div>
</template>

<script>


export default {
    props:{
        item: Object
    }
}
</script>
  
<template>
    <div class="item">
        <p class="name">{{name}}</p>
        <p class="description">{{description}}</p>
    </div>    
</template>

<script>
export default {
    name: "EventsMenuItem", 
    props: ['name', 'description']
}
</script>

<style scoped>

    .item{
        margin: 1rem auto;
    }

    .name{
        font-size: 1.1rem;
    }

    .description{
        font-size: 0.9rem;
    }
</style>
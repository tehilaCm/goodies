<template>
    <div class="item">
        <p class="name">{{name}}</p>
        <p class="price">{{price}}</p>
        <p class="description">{{description}}</p>
    </div>
</template>

<script>
export default {
    name: "MenuItem", 
    props: ['name', 'description', 'price']
}
</script>

<style scoped>

.item{
    border-bottom: 1px solid rgb(223, 219, 219);
    margin: 1.5rem 0;
}

.name{
    text-align: right;
    float: right;
    font-size: 1.1rem;
}

.description{
    text-align: right;
    margin: 0.3rem auto auto 4rem;
    font-size: 0.9rem;
}

.price{
    text-align: left;
    font-size: 1.1rem;
}

</style>
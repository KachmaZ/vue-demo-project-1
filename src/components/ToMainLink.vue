<template>
    <router-link class="to-main-link" to="/">
        <div class="desc">Back to main </div> 
        <img class="tml-arrow" src="@/assets/home-arrow.svg" alt="">
    </router-link>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.to-main-link {
    width: 100px;
    height: 100px;

    position: fixed;
    left: 5px;
    top: 20px;
    text-align: center;

    text-decoration: none;
    color: #d0d326;

    display: block;

    .tml-arrow {
        width: 50px;
        height: 50px;

        color: #d0d326;
        transform: scaleX(-1);
    }
}
</style>
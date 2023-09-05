<template>
    <div id="loading">
        <img class="img" src="../../public/loadingSpinner.gif" alt="loading..." width="200" />
    </div>
</template>
  
<script>
export default {
    name: "Loading"
};
</script>

<style>
#loading {
    position: absolute;
    z-index: 1000;
    background: radial-gradient(circle, rgba(248, 198, 141, 0.13) 0%, rgba(94, 50, 3, 0.164) 100%);
    height: 100vh;
    width: 100vw;
    text-align: center;
    line-height: 100vh;
}

.img {
    position: relative;
    margin: auto;
    margin-top: 20%;
}
</style>
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
    background-color: rgba(255, 255, 255, 0.61);
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
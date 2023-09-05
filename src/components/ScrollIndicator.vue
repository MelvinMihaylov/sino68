<script>
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
</script>

<template>
    <div class="progress-container">
        <div class="progress-bar bg-gradient-to-r from-red-400 from-30% via-red-800 via-60% to-purple-900 to-90%" id="myBar"></div>
    </div>
</template>

<style>
/* The progress container (grey background) */
.progress-container {
    width: 100%;
    height: 9px;
    background: rgb(243, 236, 223);
}

/* The progress bar (scroll indicator) */
.progress-bar {
    height: 11px;
    width: 0%;
}
</style>
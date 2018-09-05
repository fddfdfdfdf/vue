<template>
    <div id="testBg">

    </div>
</template>

<script>
    import {dd} from "../common/canvasNest.js"
    import {ff} from "../common/ribbon.js"
    export default {
        name: "canvasDiv",
        mounted(){
            this.$nextTick( () => {
                    dd();
                    ff();
            })
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="container-fluid" id="page-container">
        <h1>{{ this.userName }} / <router-link v-bind:to="'/second/page?mainId='+ this.userName">someLink</router-link></h1>
    </div>
</template>
<script>
    export default {
        name: "indexPage",
        data: function() {
            return {
                userName : "lebnikUser"
            };
        }
    };

</script>

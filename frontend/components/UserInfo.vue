<template>
    <div class="container-fluid" id="page-container">
        <h1>Hi {{ $route.query.mainId }}</h1>
        <router-link v-if="typeof $route.query.mainId !== 'undefined'" v-bind:to="'/?id='+ $route.query.mainId" class="btn btn-outline-secondary">Вернуться</router-link>
    </div>
</template>
<script>
    export default {
        name: "UserInfo",
        data: function() {
            return {};
        }
    };

</script>

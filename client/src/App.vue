<template>
    <div class="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="scss">
body {
    margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.page {
    padding: 20px;

    .page-header {
        display: flex;
        .title {
            font-size: 30px;
        }
    }

    .card-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, 250px);
        .card {
            margin: 20px;
            padding: 20px;
            background-color: #999999;
            color: #000000;
            width: 200px;
            height: 150px;
            display: grid;
            place-items: center start;
            cursor: pointer;
            .header {
                font-size: 20px;
                font-weight: 600;
            }
        }
    }
}
</style>

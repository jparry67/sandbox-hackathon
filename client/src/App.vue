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
@import './styles/variables.scss';
body {
    margin: 0;
    user-select: none;
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
            background-color: $grey1;
            width: 200px;
            height: 150px;
            display: grid;
            place-items: center start;
            cursor: pointer;
            .header {
                font-size: 20px;
                font-weight: 600;
            }
            .appointment-info {
                display: flex;
                flex-direction: column;
                align-items: start;
            }
            .action {
                display: flex;
                flex-direction: column;
                align-items: end;
                text-decoration: underline;
                width: 100%;
            }
        }
    }
}
</style>

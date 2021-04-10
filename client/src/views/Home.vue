<template>
    <div class="home">
        <Nav type="unauthenticated" />
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>Welcome to the Sandbox Hackathon Project</h1>
        <h3>Check out the todos</h3>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
    name: 'Home',
    components: {
        Nav
    },
}
</script>

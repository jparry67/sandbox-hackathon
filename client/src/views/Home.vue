<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld :msg="message"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Service from '@/services/Service.js';

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    data: () => {
        return {
            message: 'Testing testing',
        }
    },
    created: function() {
        this.getInfo();
    },
    methods: {
        async getInfo() {
            Service.getInfo().then((res) => {
                this.message = res.data;
            });
        }
    }
}
</script>

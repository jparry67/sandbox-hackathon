<template>
    <div class="calendar">
        <h1>This is a calendar page</h1>
        <p>Logged in as {{ userType }}</p>
    </div>
</template>

<script>
export default {
    name: 'Shadow',
    data: () => {
        return {
            userType: '',
        }
    },
    created: function() {
        this.userType = localStorage.getItem('userType');
        console.log(this.userType, !!this.userType);
        if (!this.userType) {
            this.$router.push('/login');
        }
    },
}
</script>
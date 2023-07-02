<template>
    <div class=" w-screen">
        <a href="#IndexView">IndexView</a><br>
        <a href="#HomeView">HomeView</a><br>
        <IndexView v-if="visibleView === 'IndexView'"/>
        <HomeView v-else-if="visibleView === 'HomeView'"/>
    </div>
</template>
<script>
    import IndexView from '@/views/IndexView.vue';
    import HomeView from '@/views/HomeView.vue';
    export default {
        components:{ IndexView,HomeView },
        data(){
            return {
                visibleView:'IndexView'
            }
        },
        beforeCreate(){
            window.onhashchange = () => {
                this.visibleView = location.hash.replace('#','')
            }
        },
        created(){
            window.vm = this;
        },
    }
</script>
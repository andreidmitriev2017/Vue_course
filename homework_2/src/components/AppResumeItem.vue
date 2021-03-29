<template>
    <div>
        <component :is="getTag" v-if="!item.img">{{item.value}}</component>
        <div class="avatar" v-else>
            <img :src="item.value"/>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],

    computed: {
        getTag() {
            const {type} = this.$props['item'];

            if (type == 'title') {
                return 'h1';
            } else if (type == 'subtitle') {
                return 'h2';
            } else {
                return 'p';
            }
        }
    }
}
</script>

<style>

</style>
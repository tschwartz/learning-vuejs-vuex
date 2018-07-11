<template>
    <div>
        <Logo />
        <div class="photo-grid">
            <PhotoTile
                v-for="post in posts"
                v-bind:key="post.id"
                :post.sync="post"
            ></PhotoTile>
        </div>
    </div>
</template>

<script>
    import Logo from '../components/Logo.vue';
    import PhotoTile from '../components/PhotoTile.vue';

    export default {
        name: 'PhotoGrid',
        components: {
            Logo,
            PhotoTile
        },
        computed: {
            posts() {
                return this.$store.state.posts;
            }
        }
    }
</script>

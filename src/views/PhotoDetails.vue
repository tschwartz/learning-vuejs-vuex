<template>
    <div>
        <Logo />
        <div class="single-photo">
            <PhotoTile
                :post.sync="post"
            ></PhotoTile>
            <Comments />
        </div>
    </div>
</template>

<script>
    import Logo from '../components/Logo.vue';
    import PhotoTile from '../components/PhotoTile.vue';
    import Comments from '../components/Comments.vue';

    export default {
        name: 'PhotoDetails',
        components: {
            Logo,
            PhotoTile,
            Comments
        },
        computed: {
            post() {
                const postId = this.$route.params.postId;
                const posts = this.$store.state.posts;
                const index = posts.findIndex(post => post.code === postId)

                return this.$store.state.posts[index];
            }
        }
    }
</script>

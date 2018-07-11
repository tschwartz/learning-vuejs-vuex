<template>
    <div class="comments">
        <div
            v-for="(comment, index) in comments"
            v-bind:key="index"
            :post.sync="comment"
            class="comment"
        >
            <p>
                <strong>{{ comment.user }}</strong>{{ comment.text }}
                <button
                    class="remove-comment"
                    v-on:click="onDelete(index)"
                >&times;</button>
            </p>
        </div>
        <form class="comment-form" v-on:submit="onSubmit" action="#" method="post">
            <input type="text" v-model="commentAuthor" placeholder="author" />
            <input type="text" v-model="commentText" placeholder="comment" />
            <input type="submit" hidden />
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Comments',

        data() {
            return {
                postId: this.$route.params.postId,
                commentAuthor: '',
                commentText: ''
            }
        },

        computed: {
            comments() {
                return this.$store.state.comments[this.postId];
            }
        },

        methods: {
            onDelete(index) {
                const { postId }  = this;

                this.$store.commit('deleteComment', {
                    postId,
                    index
                })
            },

            onSubmit: function(event) {
                event.preventDefault();

                const { postId, commentAuthor, commentText } = this;

                if (commentAuthor === '' || commentText === '') {
                    return;
                }

                this.$store.commit('postComment', {
                    postId,
                    commentAuthor,
                    commentText
                });
            }
        }
    }
</script>

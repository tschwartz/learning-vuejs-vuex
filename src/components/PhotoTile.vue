<template>
    <figure class="grid-figure">
        <div class="grid-photo-wrap">
            <router-link v-bind:to="postUrl">
                <img
                    class="grid-photo"
                    v-bind:src="post.display_src"
                    v-bind:alt="post.caption"
                />
            </router-link>
            <transition
                name="like"
                :duration="500"
            >
                <span
                    v-bind:key="post.likes"
                    class="likes-heart"
                >{{ post.likes }}</span>
            </transition>
        </div>
        <figcaption>
            <p>{{ post.caption }}</p>
            <div class="control-buttons">
                <button
                    class="likes"
                    v-on:click="onClick(post.id)"
                >&hearts; {{ post.likes }}</button>
                <router-link v-bind:to="postUrl" class="button">
                    <span class="speech-bubble"></span> {{ commentCount }}
                </router-link>
            </div>
        </figcaption>
    </figure>
</template>

<script>
    export default {
        name: 'PhotoTile',

        props: ['post'],

        data: function() {
            return {
                commentCount: this.$store.state.comments[this.post.code]
                 ? this.$store.state.comments[this.post.code].length : 0,
                postUrl: `/view/${this.post.code}`
            }
        },

        methods: {
            onClick(id) {
                this.$store.commit('incrementLikes', {
                    id
                });
            }
        }
    }
</script>

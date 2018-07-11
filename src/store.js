import Vue from 'vue'
import Vuex from 'vuex'

import posts from './data/posts';
import comments from './data/comments';

Vue.use(Vuex)

const state = {
    posts,
    comments
};

const mutations = {
    incrementLikes(state, payload) {
        const posts = state.posts.map(post => {
            const newPost = {
                likes: post.likes++
            };

            if (payload.id !== post.id) {
                return {
                    ...post,
                    ...newPost
                }
            }

            return post;
        });

        state.posts = posts;
    },

    deleteComment(state, payload) {
        const { postId, index } = payload;
        const comments = state.comments[postId].filter((comment, i) => {
            return index !== i
        });

        state.comments[postId] = comments;
    },

    postComment(state, payload) {
        const { postId, commentAuthor, commentText } = payload;

        state.comments[postId].push({
            user: commentAuthor,
            text: commentText
        });
    }
};

export default new Vuex.Store({
    state,
    mutations
});

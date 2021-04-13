const Post = require('../../modules/Post');

module.exports = {
    Query: {
        async getPosts() {
            try {
                const Posts = await Post.find();
                return Posts;
            }
            catch (err) {
                throw new Error(err);
            }
        }
    }
}
const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "I've always wanted something like this!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "So cool!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Looking forward to using this!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Sounds great!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "omw already"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "prettyy, pretty, pretty good"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "This is fire"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "This will be useful!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
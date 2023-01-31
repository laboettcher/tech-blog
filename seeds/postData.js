const { Post } = require('../models');

const postData = [
    {
        title: "Mood Mixer is now available!",
        post_content: "Users can select a mood and are then presented with a Spotify playlist to suit their current mood.",
        user_id: 3
    },
    {
        title: "Employee Tracker can help your business",
        post_content: "Employee Tracker is a command-line application that is similar to a content management system (CMS), and can be used to help companies manage their employee databases. The user will be prompted by inquirer to add information about employees, roles, and departments that will then be added to the employees database and can be changed at any time.",
        user_id: 1
    },
    {
        title: "Attention students!! Use Note Taker!",
        post_content: "This application can help you write and save notes.",
        user_id: 2

    },
    {
        title: "Check out this professional README generator",
        post_content: "You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.",
        user_id: 5
    },
    {
        title: "Stay tuned for a project management application!",
        post_content: "Users will be able to manage current project and create new ones. They will even be able to track how much time they spend working on them in addition to having entertainment options for those much needed breaks from working!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
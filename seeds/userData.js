const { User } = require('../models');

const userData = [
    {
        username: "lavinia_b",
        twitter: "laviniab",
        github: "laboettcher",
        email: "example@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "christian_l",
        twitter: "christianl",
        github: "christianl",
        email: "example2@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "evelyn_t",
        twitter: "evelynct",
        github: "ectaylor",
        email: "example3@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "katie_t",
        twitter: "katieet",
        github: "katieet",
        email: "example4@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "kelly_b",
        twitter: "kellyrb",
        github: "kellyrb",
        email: "example5@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "scotty_t",
        twitter: "scottjt",
        github: "scott_j_t",
        email: "example6@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
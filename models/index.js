const User = require("./User");
const Post = require("./Post");
const { post } = require("../routes/api/user-routes");

//create associations
User.hasMany(Post, {
    foreignKey: "user_is'"
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };
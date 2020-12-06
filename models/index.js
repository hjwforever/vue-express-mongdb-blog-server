const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false)

const db = {};

db.mongoose = mongoose;

db.url = dbConfig.url;

db.user = require("./user.model");
db.role = require("./role.model");
db.ROLES = ["user", "admin", "moderator"];

db.posts = require("./post.model.js")(mongoose, mongoosePaginate);

module.exports = db;

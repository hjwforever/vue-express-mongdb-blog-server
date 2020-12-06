module.exports = app => {
    const posts = require("../controllers/post.controller");

    const router = require("express").Router();

    // 创建并保存文章
    router.post("/", posts.create);

    // 按条件查找所有文章
    router.get("/", posts.findAll);

    // 查找指定id的文章
    router.get("/:id", posts.findOne);

    // 更新指定id的文章内容
    router.put("/:id", posts.update);

    // 删除指定id的文章
    router.delete("/:id", posts.delete);

    // 删除所有文章
    router.delete("/", posts.deleteAll);

    // 指定id的用户点赞指定id的文章
    // app.use('/api/post',require("express").Router().put("/like", posts.like));
    app.put('/api/post/like',posts.like);


    app.use('/api/posts', router);
};

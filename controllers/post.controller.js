const db = require("../models");
const Post = db.posts;

//设置分页数据
const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

// 创建并保存文章
exports.create = (req, res) => {
    // 判断是否为有效请求
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // 创建文章
    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        likes : [],
    });

    // 保存该文章
    post
        .save(post)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Post."
            });
        });
};

// 根据查询条件从数据库, 按标题名及作者名查找所有文章
exports.findAll = (req, res) => {
    const { page, size, title, author  } = req.query;
    // console.log(page);
    // console.log(size);
    // console.log(title);
    // console.log(author);

    //或查询，查询标题或者作者
    const condition = title ? {
            $or: [{title: {$regex: new RegExp(title), $options: "i"}},
                {author: {$regex: new RegExp(author), $options: "i"}}]
        }
        : {};
    // console.log("title: "+title);
    // console.log("author: "+author);
    // console.log("condition: "+condition);
    const { limit, offset } = getPagination(page, size);

    if (size !== "all"){  //分页查找
        Post.paginate(condition, { offset, limit })
            .then((data) => {
                res.send({
                    totalItems: data.totalDocs,
                    posts: data.docs,
                    totalPages: data.totalPages,
                    currentPage: data.page - 1,
                });
            })
            .catch((err) => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving posts.",
                });
            });
    }
    else {      //不分页按照条件进行查找
        Post.find(condition)
            .then(data => {
                res.send({
                    totalItems: Object.keys(data).length,
                    posts: data,
                    totalPages: 1,
                    currentPage: 0,
                });
                // res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving posts."
                });
            });
    }

};

// 通过id查找文章
exports.findOne = (req, res) => {
    const id = req.params.id;

    Post.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Post with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Post with id=" + id || err.message});
        });
};

// 更新指定id的文章内容
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content to update can not be empty!"
        });
    }

    const id = req.params.id;

    Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Post with id=${id}. Maybe Pot was not found!`
                });
            } else res.send({ message: "Post was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Post with id=" + id || err.message
            });
        });
};

// 从数据库中删除指定id的文章
exports.delete = (req, res) => {
    const id = req.params.id;

    Post.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
                });
            } else {
                res.send({
                    message: "Post was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Post with id=" + id || err.message
            });
        });
};

// 从数据库中删除所有文章
exports.deleteAll = (req, res) => {
    Post.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Posts were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all posts."
            });
        });
};


// 指定id的用户点赞指定id的文章
exports.like = (req, res) => {

    const postId = req.body.id;
    const userId = req.body.userId;
    const unlike = req.body.unlike || false ;  // 是否为取消点赞, 默认为否

    // 判断是否为有效请求, 需要指定文章id及用户id
    if (!(postId&&userId)) {
        res.status(202).send({ message: "PostID and UserID can not be empty!" });
        return;
    }

    const  options =  unlike ? {$pull: {"likes": userId}} : {$push: {"likes": userId}}
    const likeMsg = unlike ? "unlike":"like"
    Post.findById(postId)
        .then(data => {
            if (!data)
                res.status(202).send({ message: "Not found Post with id " + postId });
            else {  // 请求进行点赞操作
                if( (data.likes.indexOf(userId) !== -1 && !unlike) || (data.likes.indexOf(userId) === -1 && unlike)){ // 判断该用户是否给该文章点过赞
                    res.status(202).send({ message: `The User(id=${userId}) had already ${ likeMsg }d the Post(id=${postId})!`});
                }
                else {
                    // 将用户ID插入指定文章的点赞列表
                    Post.updateOne({"_id": postId}, options )
                        .then(data => {
                            // console.log(data);
                            if (!data) {
                                res.status(202).send({
                                    message: `The User(id=${userId}) cannot ${ likeMsg } the Post(id=${postId}). Maybe UserID was not found!`
                                });
                            } else res.send({ message: `successfully, The User(id=${userId}) ${ likeMsg }d  the Post(id=${postId})!` });
                        })
                        .catch(err => {
                            res.status(202).send({
                                message: `The User(id=${userId}) cannot ${ likeMsg } the Post(id=${postId}). Maybe UserID was not found! ` + err.toString()
                            });
                        });
                }
            }
            // else {  // 请求进行取消点赞
            //     if( data.likes.indexOf(userId) === -1 ){ // 判断该用户是否给该文章点过赞
            //
            //         res.status(202).send({ message: `The User(id=${userId}) had not liked the Post(id=${postId})!`});
            //     }
            //     else {
            //         // 将用户ID插入指定文章的点赞列表
            //         Post.updateOne({"_id": postId}, {$pull: {"likes": userId}}  )
            //             .then(data => {
            //                 // console.log(data);
            //                 if (!data) {
            //                     res.status(202).send({
            //                         message: `The User(id=${userId}) cannot like the Post(id=${postId}). Maybe UserID was not found!`
            //                     });
            //                 } else res.send({ message: `successfully, The User(id=${userId}) liked the Post(id=${postId})!` });
            //             })
            //             .catch(err => {
            //                 res.status(202).send({
            //                     message: `The User(id=${userId}) cannot like the Post(id=${postId}). Maybe UserID was not found! ` + err.toString()
            //                 });
            //             });
            //     }
            // }
        })
        .catch(err => {
            res
                .status(406)
                .send({ message: "Error retrieving Post with id=" + postId || err.message});
        });
}

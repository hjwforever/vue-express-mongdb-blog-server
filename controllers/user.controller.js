exports.allAccess = (req, res) => {
    res.status(200).send("公共模块");
};

exports.userBoard = (req, res) => {
    res.status(200).send("文章模块");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("管理员模块");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("版主模块");
};

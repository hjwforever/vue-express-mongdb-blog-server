// module.exports = mongoose => {
//     const Tutorial = mongoose.model(
//         "tutorial",
//         mongoose.Schema(
//             {
//                 title: String,
//                 description: String,
//                 published: Boolean
//             },
//             { timestamps: true }
//         )
//     );
//
//     return Tutorial;
// };

// _id replaced by id
module.exports = (mongoose, mongoosePaginate) => {
    var schema = mongoose.Schema(
        {
            title: String,
            author: String,
            content: String,
            likes: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User"
                }
            ]
        },  
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    schema.plugin(mongoosePaginate);

    const Post = mongoose.model("post", schema);
    return Post;
};

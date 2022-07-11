const PostModel = require("../../model/post/post");
const LikeModel = require("../../model/post/like");
const CommentModel = require("../../model/post/comment");
const ShareModel = require("../../model/post/share");

const comments = function(id,limit,offset){
     return CommentModel.find({ post: id })
       .sort({ date: -1 })
       .limit(parseInt(limit))
       .skip(parseInt(offset));
}
const comment_count = function (id) {
    return CommentModel.find({post:id}).countDocuments()
};
const liked = function(id,auth){
   return  LikeModel.find({post:id,user:auth}).countDocuments();

}
const like_count = function(id){
     return LikeModel.find({ post: id }).countDocuments();
}
const single_post = function(args){
    return PostModel.findById(args.id)
}
const share = function(id){
    return ShareModel.findById(id).countDocuments();
}

module.exports = {
  single_post,
  comments,
  liked,
  share,
  comment_count,
  like_count,
};

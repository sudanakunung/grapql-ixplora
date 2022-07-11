const PostModel = require("../../model/post/post");
const followingMOdel = require("../../model/user/following");
const locationModel = require("../../model/location/location");

const following_post = async function (auth, limit, offset) {
  const followings = await followingMOdel
    .find({ user: auth })
    .select("following");
  const followingIds = await followings.map((f) => f.following);

  return PostModel.find({ user: { $in: followingIds }, publish: { $eq: true } })
    .limit(limit)
    .skip(offset)
    .sort({ date: -1 });
};

const near_post = async function (id, longitude, latitude, limit, offset) {
  const latlang = {
    type: "Point",
    coordinates: [longitude, latitude],
  };
  const locations = await locationModel
    .find({ location: { $near: { $maxDistance: 10000, $geometry: latlang } } })
    .select("_id");

  const locationsIds = await locations.map((f) => f._id);
  return PostModel.find({
    location: { $in: locationsIds },
    publish: { $eq: true },
  })
    .limit(limit)
    .skip(offset)
    .sort({ date: -1 });
};

const recommend_post = async function (limit, offset) {
  return PostModel.find({ publish: { $eq: true } })
    .limit(limit)
    .skip(offset)
    .sort({ likes: "desc", date: "desc", view: "desc" });
};

module.exports = {
  following_post,
  near_post,
  recommend_post,
};

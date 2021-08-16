import mongoose from 'mongoose';

const Profile = mongoose.Schema({
  username: {
    type: String,
  },
  Avatar: {
    type: String,
  },
  Followers: {
    type: Number,
  },
  Following: {
    type: Number,
  },
  YourTweets: {
    type: [String],
  },
  Bio: {
    type: String,
  },
  CoverImg: {
    type: String,
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});

const ProfileInfo = mongoose.model('ProfileInformation', Profile);
export default ProfileInfo;

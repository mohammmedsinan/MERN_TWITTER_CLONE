import mongoose from 'mongoose';

const Tweeting = mongoose.Schema({
  username: {
    type: String,
  },
  TweetText: {
    type: String,
  },
  Img: {
    type: String,
  },
  Avatar: {
    type: String,
  },
  Date: {
    type: Date,
    default: Date.now(),
  },
});

const tweetIng = mongoose.model('TweetsData', Tweeting);
export default tweetIng;

import AccModal from '../models/AccModal.js';

export const PostProfile = async (req, res, next) => {
  const InfoNeeded = req.body;
  const AccModals = new AccModal(InfoNeeded);
  AccModal.findOne({ username: InfoNeeded.username }, (err, data) => {
    if (data !== null) {
      res.status(401).json('No working');
    } else {
      res.status(201);
      AccModals.save().then((Tweet) => {
        res.json(Tweet);
      });
    }
  });
};

export const GetProfile = (req, res) => {
  AccModal.find({ username: req.params.username }, (error, data) => {
    res.json(data);
  });
};

export const UpdateProfile = async (req, res) => {
  //this constant takes just four value it is an object that takes name , bio , img and coverImg
  const key = req.body.key;
  const Exp = req.body;
  try {
    await AccModal.findOne({ username: key }, (error, data) => {
      if (Exp.username) {
        data.username = Exp.username;
      }
      if (Exp.Bio) {
        data.Bio = Exp.Bio;
      }
      if (Exp.Bio) {
        data.Bio = Exp.Bio;
      }
      if (Exp.Avatar) {
        data.Avatar = Exp.Avatar;
      }
      if (Exp.CoverImg) {
        data.CoverImg = Exp.CoverImg;
      }
      data.save();
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
};

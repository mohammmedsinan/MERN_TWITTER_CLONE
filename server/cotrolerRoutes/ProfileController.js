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

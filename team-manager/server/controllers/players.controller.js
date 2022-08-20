const Player = require("../models/players.model");

const addPlayer = (req, res) => {
  const { body } = req;
  console.log(body);
  Player.create(req.body)
    .then((newPlayer) => {
      res.json(newPlayer);
      console.log(newPlayer);
    })
    .catch((err) => res.status(400).json(err));
};

const findAllPlayers = (req, res) => {
  Player.find()
    .then((allPlayers) => {
      res.json(allPlayers);
      console.log(allPlayers);
    })
    .catch((err) => res.status(400).json(err));
};

const deletePlayer = (req, res) => {
  Player.deleteOne({ _id: req.params.id })
    .then((deletedPlayer) => {
      res.json(deletedPlayer);
      console.log(deletedPlayer);
    })
    .catch((err) => err.status(400).json(err));
};

const updatePlayer = (req, res) => {
  Player.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPlayer) => {
      res.json(updatedPlayer);
      console.log(updatedPlayer);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports = { addPlayer, findAllPlayers, deletePlayer, updatePlayer };

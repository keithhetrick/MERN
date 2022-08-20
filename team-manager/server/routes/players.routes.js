const PlayerController = require("../controllers/players.controller");

module.exports = (app) => {
  app.post("/api/player", PlayerController.addPlayer);
  app.get("/api/player", PlayerController.findAllPlayers);
  app.delete("/api/player/:id", PlayerController.deletePlayer);
  app.put("/api/player/:id", PlayerController.updatePlayer);
};

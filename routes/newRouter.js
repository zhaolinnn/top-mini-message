const { Router } = require("express");

const newRouter = Router();

// no need to do /new again here, it's already checked in app.js
newRouter.get("/", (req, res) => res.send("new message testers"));

module.exports = newRouter;
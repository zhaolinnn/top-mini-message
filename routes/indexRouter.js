const { Router } = require("express");

const messages = [
    
]

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("testerss!!"));

module.exports = indexRouter;
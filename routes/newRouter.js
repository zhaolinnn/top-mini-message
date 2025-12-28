const { Router } = require("express");

const newRouter = Router();

// no need to do /new again here, it's already checked in app.js
newRouter.get("/", (req, res) => {
    res.render("form");
});



module.exports = newRouter;
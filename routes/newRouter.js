const { Router } = require("express");

const newRouter = Router();

const links = [
  { href: "/", text: "Home" },
];


// no need to do /new again here, it's already checked in app.js
newRouter.get("/", (req, res) => {
    res.render("form", { links: links });
});



module.exports = newRouter;
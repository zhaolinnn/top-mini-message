const { Router } = require("express");

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

const links = [
  { href: "/", text: "Home" },
//   { href: "new", text: "New Message" },
];

const indexRouter = Router();


indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages, links: links });
});

// we use a GET here to see when the user is at a /messages/:messageId link
// then renders details page with that message (details)
indexRouter.get("/messages/:messageId", (req, res) => {
    const { messageId } = req.params;
    const details = messages[messageId];
    res.render("details", { details: details })
});

indexRouter.post("/new", (req, res) => {
    const { messageText, messageUser } = req.body;
    messages.push({ text: messageText, user: messageUser, added: new Date() });

    res.redirect("/");
});

module.exports = indexRouter;

const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("Home");
});

const PORT = 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
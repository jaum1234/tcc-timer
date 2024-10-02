require("dotenv").config();
const { createServer } = require("http");
const fs = require("fs");

const server = createServer((req, res) => {
    let file = "";

    if (req.url.includes("img")) {
        file = "instagram_logo.png"; 
    } else {
        file = "index.html";
    }

    fs.readFile(`./public/${file}`, (err, data) => {
        if (err) {
            throw err;
        }

        res.end(data);
    });
});

const port = process.env.APP_PORT;

server.listen(process.env.APP_PORT, () => {
    console.log("Listening on port " + process.env.APP_PORT);
});

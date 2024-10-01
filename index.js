const { createServer } = require("http");
const fs = require("fs");

const server = createServer((req, res) => {
    let file = ""; 

    if (req.url.includes("img")) {
        file = "instagram_logo.png"; 
    } else {
        file = "index.html";
    }

    fs.readFile(`./${file}`, (err, data) => {
        if (err) {
            throw err;
        }

        res.end(data);
    });
});

const port = 3001;

server.listen(3001, () => {
    console.log("Ouvindo na porta " + 3001);
});

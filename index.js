require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 5001;
server.listen(port, () => console.log(`\n api is running on port ${port} \n`));

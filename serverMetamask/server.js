const express = require("express");
const path =reguire('path');

const app =express();

app.get("/, (req, res") => {
    res.sendFile(path.join(_dirname + "/index.html"));
})

const server = app.listen(5000);
const portNumber = server.address().port;
console.log("port: "+ portnumber);
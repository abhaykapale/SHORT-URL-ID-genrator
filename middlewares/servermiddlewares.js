const express = require('express');
const path= require('path');


function setupmiddleware(app) {

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "..", "views"));

}

module.exports = {
    setupmiddleware,
};

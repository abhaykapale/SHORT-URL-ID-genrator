const express = require("express");
const { getURL, Render,renderHome,Redirect } = require("../controllers/url");
// const { Redirect } = require("../controllers/user");
const router = express.Router();

router.get('/', renderHome);
router.post('/', getURL);
router.get('/:id', Redirect);
router.get('/:id', Render);

module.exports = router;

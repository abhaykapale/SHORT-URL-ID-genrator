const shortid = require("shortid");
const URL = require("../models/URLSchema");

async function getURL(req, res) {
    const { URL: longURL } = req.body;

    const existing = await URL.findOne({ URL: longURL });
    if (existing) {
        const shortURL = `http://localhost:8080/${existing.ShortID}`;
        return res.render("abhayurl", { shortURL });
    }

    const id = shortid.generate();

    await URL.create({
        URL: longURL,
        ShortID: id,
        RedirectID: longURL
    });

    const shortURL = `http://localhost:8080/${id}`;
    return res.render("abhayurl", { shortURL });
}


async function Render(req, res) {
    const id = req.params.id; 
    const OgUrl = await URL.findOne({ ShortID: id });

    if (!OgUrl) {
        return res.status(404).send("URL not found");
    }

    OgUrl.clicks++;
    await OgUrl.save();
    console.log(OgUrl+"\n");
    
    res.render("abhayurl", { url: OgUrl.URL });

}

async function Redirect(req, res) {
    const id = req.params.id; 
    const OgUrl = await URL.findOne({ ShortID: id });

    if (!OgUrl) {
        return res.status(404).send("URL not found");
    }

    OgUrl.clicks++;
    await OgUrl.save();
    console.log(OgUrl+"\n");
    
    return res.redirect(OgUrl.URL);
}


function renderHome(req, res) {
    res.render("abhayurl", { shortURL: null });
}


module.exports={
    getURL,
    Render,
    renderHome,
    Redirect,
}
const shortid = require("shortid");
const URL = require("../models/URLSchema");

async function getURL(req, res) {
    const body = req.body;
    
    const existing = await URL.findOne({ URL: body.url });

if (existing) {
    return res.status(200).send(`Short already exists: ${existing.ShortID}`);
}


    const id = shortid.generate();

    const result = await URL.create({
        URL: body.URL,
        ShortID: id,
        RedirectID: body.URL
    });

    console.log(result);

    res.status(201).send("\nUSER CREATED SUCCESSFULLY "+`Short: ${id}`);
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


module.exports={
    getURL,
    Redirect,
}
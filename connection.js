const { connect } = require('http2');
const mongo =require('mongoose')

async function connectDB(url) {
  try {
    await mongo.connect(url);
    console.log("DB CONNECTION SUCCESSFUL");
  } catch (err) {
    console.error("DB CONNECTION FAILED:", err);
  }
}

module.exports= {
    connectDB,
}
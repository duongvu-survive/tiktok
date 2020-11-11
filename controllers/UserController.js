const db = require('../ultis/db')
const TikTokScraper = require("tiktok-scraper")
const fs = require("fs")
const FFMPEG = require("../ultis/ffmpeg");
// var command = new FfmpegCommand();
module.exports = {
    get: (req, res) => {
        fecthUser(req, res);
    },
    post: (req, res) => {

        if (req.body.username) {
            fecthUser(req, res);
        } else {
            res.send({ message: "username is require field " })
        }
    }
}
var fecthUser = async(req, res) => {
    // var
    // var data = await TikTokScraper.user(req.body.username, {
    //     number: 5,
    //     download: true,
    //     asyncDownload: 5,
    //     filepath: "./public/downloads",
    //     hdVideo: true,
    // })
    // console.log(data.zip);
    var merge = await FFMPEG.mergeVideo("./public/downloads/midu_official")
    await res.send(merge)
}
var processVideo = () => {

}
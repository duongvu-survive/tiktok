var ffmpeg = require('fluent-ffmpeg');
const fs = require("fs")
module.exports = {
    mergeVideo(folder) {
        var dir = fs.readdirSync(folder);
        console.log(dir)
        var merge = deQuy(dir, folder, dir.length - 1);
        var name = '_' + Math.random().toString(36).substr(2, 9);
        name = "./public/" + name + '.mp4';
        // console.log(merge);
        return new Promise(function(resolve, reject) {
            merge
                .mergeToFile(name)
                .on('error', function(err) {
                    console.log(err.message);
                    return reject(err);
                })
                .on('end', function() {
                    return resolve(name);
                })

        })
    },
    convertVideo(filepath, options = {}) {
        var proc = ffmpeg(filepath)
        if ("bitrate" in options) {
            proc.videoBitrate(options.bitrate)
        }
        if ("codec" in options) {
            proc.videoCodec(options.codec)
        }
        if ("aspect" in options) {
            proc.aspect(options.aspect)
        }
        if ("size" in options) {
            proc.size(options.size)
        }
        if ("fps" in options) {
            proc.fps(options.fps)
        }
        if ("audio_codec" in options) {
            proc.audioCodec(options.audio_codec)
        }
        if ("audio_channels" in options) {
            proc.audioChannels(options.audio_channels)
        }
        if ("option" in options) {
            proc.addOption(options.option)
        }
        if ("format" in options) {
            proc.format(options.format)
        }
        if ("bitrate" in options) {
            proc.videoBitrate(options.bitrate)
        }
        return new Promise(function(resolve, reject) {
            proc.on('end', function() {
                    return resolve("file has been converted succesfully")
                })
                .on('error', function(err) {
                    return reject(err.message)
                })
        })
    }
}
var deQuy = (array, folder, i) => {
    if (i == 0) {
        return ffmpeg(folder + "/" + array[i])
    }
    return deQuy(array, folder, i - 1).input(folder + "/" + array[i])
}
const $ = require('jquery');

function getIceObject(cb) {
    // $.ajax({
    //     url: "https://global.xirsys.net",
    //     data: {
    //         ident: "hatran92",
    //         secret: "f4e63042-8bd2-11e8-a73d-4792a42eb3fb",
    //         channel: "hatn207.github.io",
    //         // domain: "hatn207.github.io",
    //         // application: "default",
    //         // room: "default",
    //         secure: 1
    //     },
    //     success: function (data, status) {
    //         // data.d is where the iceServers object lives
    //         cb(data.d);
    //     },
    // });
    $.ajax({
        url: "https://global.xirsys.net/_turn/hatn207.github.io/",
        type: "PUT",
        async: false,
        headers: {
            "Authorization": "Basic " + btoa("hatran92:f4e63042-8bd2-11e8-a73d-4792a42eb3fb")
        },
        success: function (res) {
            cb(data.d);
            console.log("ICE List: " + res.v.iceServers);
        }
    });
}

module.exports = getIceObject;
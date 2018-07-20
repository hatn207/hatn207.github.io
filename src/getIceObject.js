const $ = require('jquery');

function getIceObject(cb) {
    $.ajax({
        url: "https://service.xirsys.com/ice",
        data: {
            ident: "hatran92",
            secret: "f4e63042-8bd2-11e8-a73d-4792a42eb3fb",
            domain: "hatn207.github.io",
            application: "default",
            room: "default",
            secure: 1
        },
        success: function (data, status) {
            console.log(data);
            // data.d is where the iceServers object lives
            cb(data.d);
        },
    });
}

module.exports = getIceObject;
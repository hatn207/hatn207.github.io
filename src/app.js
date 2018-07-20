const Peer = require('peerjs');
const uid = require('uid');
const $ = require('jquery');
const openStream = require('./openStream');
const playVideo = require('./playVideo');

function getPeer() {
    const id = uid(10);
    $('#peer-id').append(id);
    return id;
}

const peer = Peer(getPeer(), { host: 'gdit-steam.herokuapp.com', port: 443, secure: true, key: 'peerjs'});
console.log(peer);

$('#btnCall').click(() => {
    const friendId = $('#txtFriendId').val();
    openStream(stream => {
        playVideo('stream', 'localStream');
        const call = peer.call(friendId, stream);
        console.log(call);
        call.on('stream', remoteStream => playVideo(remoteStream, 'friendStream'));
    });
});

// lang nghe va tra loi
peer.on('call', (call) => {
    openStream(stream => {
        playVideo('stream', 'localStream');
        console.log(call);
        call.answer(stream);
        call.on('stream', remoteStream => playVideo(remoteStream, 'friendStream'));
    });
})
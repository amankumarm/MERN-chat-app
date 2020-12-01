const socket = io('/')
const videoGrid = document.getElementById('video-grid')
/*const myPeer = new Peer(undefined, {
  host: '/',
  port: '3001'
})*/

var uid;
const myPeer = new Peer({host:'peerjs-server.herokuapp.com', secure:true, port:443})

const myVideo = document.createElement('video')
myVideo.muted = true
const peers = {}
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  addVideoStream(myVideo, stream)
  myPeer.on('call', call => {
    call.answer(stream)
    const video = document.createElement('video')
    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
    })
  })

  socket.on('user-connected', userId => {
    uid=userId
    connectToNewUser(userId, stream)
  })
})

socket.on('user-disconnected', userId => {
  if (peers[userId]){
    console.log(userId)  
    peers[userId].close()}
})

myPeer.on('open', id => {
  console.log(` id ${id}`)
  socket.emit('join-room', ROOM_ID, id)
})

function connectToNewUser(userId, stream) {
  // console.log(userd)
  const call = myPeer.call(userId, stream)
  const video = document.createElement('video')
  call.on('stream', userVideoStream => {
    addVideoStream(video, userVideoStream)
  })
  call.on('close', () => {
    video.remove()
  })

  peers[userId] = call
}

function addVideoStream(video, stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video)
}

const btn=document.getElementById('endbutton')
btn.addEventListener('click',function (params) {
  // socket.emit('di')
 console.log("clicked")
  navigator.getUserMedia({audio:true, video: false},
    function(stream) {
         // can also use getAudioTracks() or getVideoTracks()
        var track = stream.getTracks()[0]
        track.muted=true
        track.enabled=false
        track.stop();
        console.log(track)
        // if only one media track
    },
    function(error){
        console.log('getUserMedia() error', error);
    });
})


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

//Video ID
var vID;

// read parameter 
// YTBResponsive.html?vdoID=jA05RToA5Ao
var parameters = location.search.substring(1).split("&");
if (parameters[0] == null ||  parameters[0] == undefined ||  parameters[0] == "") vID = 'M7lc1UVf-VE';
else {
  var temp = parameters[0].split("=");vID = 'M7lc1UVf-VE';
  //console.log("temp: ",temp);
  if (temp[0]="vdoID") vID=unescape(temp[1]);
  else vID = 'M7lc1UVf-VE';
}

//console.log("vID:",vID);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('YTBplayer', {
    height: '390',
    width: '640',
    videoId: vID,
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 1);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
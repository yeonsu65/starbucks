// youtube iframe api를 비동기 로그
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. onyoutubeIframeAPIReady 함수 이름은
// youtube iframe api에서 사용하는 이름이기에
// 다르게 지정하면 동작하지 않음
// 함수는 전역등록해야함
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'An6LvWQuj_8',
    playerVars:{
      autoplay:true,  //자동재생 유무
      loop: 1,
      playList:'An6LvWQuj_8'

    },
    events: {
      onReady: function(e){
        e.target.mute()
      }
    }
  });
}
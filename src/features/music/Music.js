import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { setIsPlayingNow } from './musicSlice';

let prevId, player;
export function Music() {
  const url = useSelector((state) => state.music.url);
  const startSeconds = useSelector((state) => state.music.startSeconds);
  const dispatch = useDispatch();
  let isPlaying = false;

  if (player && prevId !== url) {
    prevId = url;
    player.loadVideoById({
      videoId: getFullURL(url),
      startSeconds: startSeconds,
    });
    player.seekTo(startSeconds, false);
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      disablekb: 0,
      fs: 0,
      start: startSeconds,
    },
  };

  function _onPlay(e) {
    e.target.playVideo();
  }

  function _onPause(e) {}

  function _onReady(e) {
    player = e.target;
    if (startSeconds < e.target.getDuration()) {
      e.target.playVideo();
    }

    // e.target.h.attributes.sandbox.value = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-presentation";
  }

  function _onStateChange(e) {
    if (e.data === 1) {
      dispatch(setIsPlayingNow(true));
      isPlaying = e.data === 1 ? true : false;
    }
    if (e.data !== 1) playElse(e);
  }

  function playElse(e) {
    console.log('PLAY_ELSE');
    if (!isPlaying && url !== 'url') {
      e.target.playVideo();
      setTimeout(() => playElse(e), 1000);
    }
  }

  function _onEnd(e) {
    dispatch(setIsPlayingNow(false));
  }

  return (
    <YouTube
      videoId={getFullURL(url)} // defaults -> ''
      // id={string}                       // defaults -> ''
      className='f-video-container' // defaults -> ''
      // iframeClassName={string}          // defaults -> ''
      // style={object}                    // defaults -> {}
      title='music' // defaults -> ''
      // loading={string}                  // defaults -> undefined
      opts={opts} // defaults -> {}
      onReady={_onReady} // defaults -> noop
      onPlay={_onPlay} // defaults -> noop
      onPause={_onPause} // defaults -> noop
      onEnd={_onEnd} // defaults -> noop
      // onError={func}                    // defaults -> noop
      onStateChange={_onStateChange} // defaults -> noop
      // onPlaybackRateChange={func}       // defaults -> noop
      // onPlaybackQualityChange={func}    // defaults -> noop
    />
  );
}

export function getFullURL(url) {
  const index = url.indexOf('watch?v=');
  return url.slice(index + 8, index + 19);
}

import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const timePause = localStorage.getItem('videoplayer-current-time');

player.on(
  'timeupdate',
  throttle(data => {
    try {
      localStorage.setItem('videoplayer-current-time', data.seconds);
      // console.log(data.seconds);
    } catch (error) {
      console.log(error);
    }
  }, 1000)
);
player
  .setCurrentTime(timePause)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

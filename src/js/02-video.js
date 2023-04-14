import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function () {
    console.log(player.CurrentTime);
  }, 1000)
);

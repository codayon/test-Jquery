// venobox section start
new VenoBox({
  selector: ".my-image-links",
  numeration: true,
  infinigall: true,
  share: true,
  spinner: "rotating-plane",
});

new VenoBox({
  selector: '.my-video-links',
});

// venobox section end

// mixitup section start
var containerEl = document.querySelector('.mixitupSrc');

var mixer = mixitup(containerEl, {
  controls: {
    toggleLogic: 'and'
  }
});

// mixitup section start
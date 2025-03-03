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

// mixitup section end

// typed section start
$(function () {
  $(".typed").typed({
    strings: ["Talented.", "Powerful.", "Fearless.", ],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 5,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {}
  });
});

// typed section end
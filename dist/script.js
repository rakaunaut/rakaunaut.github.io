const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
  autoplay: {
    delay: 2000,
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
});

const pyro01 = Atropos({
  el: ".pyro01",
  shadow: true,
  highlight: true,
  activeOffset: 20,
  rotateXMax: 5,
  rotateYMax: 5,
});

const pyro02 = Atropos({
  el: ".pyro02",
  shadow: true,
  highlight: true,
  activeOffset: 20,
  rotateXMax: 5,
  rotateYMax: 5,
});

const pyro03 = Atropos({
  el: ".pyro03",
  shadow: true,
  highlight: true,
  activeOffset: 20,
  rotateXMax: 5,
  rotateYMax: 5,
});

const pyro04 = Atropos({
  el: ".pyro04",
  shadow: true,
  highlight: true,
  activeOffset: 20,
  rotateXMax: 5,
  rotateYMax: 5,
});

const pyro05 = Atropos({
  el: ".pyro05",
  shadow: true,
  highlight: true,
  activeOffset: 20,
  rotateXMax: 5,
  rotateYMax: 5,
});
const pyro06 = Atropos({
  el: ".pyro06",
  shadow: true,
  highlight: true,
  activeOffset: 20,
  rotateXMax: 5,
  rotateYMax: 5,
});
const pyro07 = Atropos({
  el: ".pyro07",
  shadow: true,
  highlight: true,
  activeOffset: 20,
  rotateXMax: 5,
  rotateYMax: 5,
});
const pyro08 = Atropos({
  el: ".pyro08",
  shadow: true,
  highlight: true,
  activeOffset: 20,
  rotateXMax: 5,
  rotateYMax: 5,
});
const pyro09 = Atropos({
  el: ".pyro09",
  shadow: true,
  highlight: true,
  activeOffset: 20,
  rotateXMax: 5,
  rotateYMax: 5,
});
const pyro10 = Atropos({
  el: ".pyro10",
  shadow: true,
  highlight: true,
  activeOffset: 20,
  rotateXMax: 5,
  rotateYMax: 5,
});


particlesJS("particles-js", {
  "particles":{
    "number":{
      "value":200,
      "density":{
        "enable":true,
        "value_area":3000
      }
    },
    "color":{
      "value":"#fd7907"
    },
    "shape":{
      "type":"circle",
      "stroke":{
        "width":0,
        "color":"#000000"
      },
      "polygon":{
        "nb_sides":3
      },
      "image":{
        "src":"img/github.svg",
        "width":100,
        "height":100
      }
    },
    "opacity":{
      "value":0.6,
      "random":true,
      "anim":{
        "enable":false,
        "speed":1,
        "opacity_min":0.1,
        "sync":false
      }
    },
    "size":{
      "value":3,
      "random":true,
      "anim":{
        "enable":true,
        "speed":5,
        "size_min":0.01,
        "sync":false
      }
    },
    "line_linked":{
      "enable":false,
      "distance":500,
      "color":"#ffffff",
      "opacity":0.4,
      "width":1
    },
    "move":{
      "enable":true,
      "speed":5.8,
      "direction":"top",
      "random":true,
      "straight":false,
      "out_mode":"out",
      "bounce":false,
      "attract":{
        "enable":false,
        "rotateX":600,
        "rotateY":1200
      }
    }
  },"interactivity":{
    "detect_on":"canvas",
    "events":{
      "onhover":{
        "enable":false,
        "mode":"bubble"
      },
      "onclick":{
        "enable":false,
        "mode":"repulse"
      },
      "resize":true
    },
    "modes":{
      "grab":{
        "distance":200,
        "line_linked":{
          "opacity":0.5
        }
      },
      "bubble":{
        "distance":200,
        "size":4,
        "duration":0.3,
        "opacity":1,
        "speed":3
      },
      "repulse":{
        "distance":200,
        "duration":0.4
      },
      "push":{
        "particles_nb":4
      },
      "remove":{
        "particles_nb":2
      }
    }
  },
  "retina_detect":true
});

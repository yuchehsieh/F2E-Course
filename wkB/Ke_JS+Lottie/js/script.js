$(document).ready(function () {

  // Load JSON file
  let openingAnimWindow = document.querySelector('#openingLottie');
  let openingAnimData = {
    container: openingAnimWindow,
    animType: 'svg',
    loop: true,
    prerender: true,
    autoplay: true, // SET to auto play
    //path: 'https://assets.lottiefiles.com/datafiles/jORpumH9Yn0XoXQ/data.json'
    path: 'json/done.json'
    //path: 'https://assets1.lottiefiles.com/datafiles/jEgAWaDrrm6qdJx/data.json'
  };
  // set bodymovin
  let openingAnim = bodymovin.loadAnimation(openingAnimData);


  $('#lottie-start').click(function () {
    openingAnim.play();
  });

  $('#lottie-pause').click(function () {
    openingAnim.pause();
  });

  $('#lottie-stop').click(function () {
    openingAnim.stop();
  });

});

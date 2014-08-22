$(document).ready(function() {
  // FlowType
  $('body').flowtype({
    minimum: 500,
    maximum: 1200,
    minFont: 16,
    maxFont: 30,
    fontRatio: 35
  });
  // Overrides
  $('div.cf').toggleClass('cf');
  $('div.content-item').toggleClass('content-item');
  $('.column-repeat-lft, .column-repeat-rt, .column-repeat-mid').remove();
  $('i.fa-gift').addClass('lg');
  $(
    '#content input[type="text"], #content input[type="email"], #content input[type="password"], #content textarea'
  ).addClass('form-control');
  $('#content input[type="submit"]').addClass('btn btn-primary');
  $('span.ErrorLabel, span.EditingFormErrorLabel').toggleClass('ErrorLabel')
    .addClass('alert alert-danger');
  $('span.InfoLabel').toggleClass('InfoLabel').addClass(
    'alert alert-warning');
  $('.contact-form span.InfoLabel').toggleClass('InfoLabel').addClass(
    'alert alert-success');
  $('.BlogLeaveComment, .archive-list h2, .events h2').addClass(
    'label label-primary');
  $('.event-time em, .event-detail .description em').addClass(
    'label label-default');
  $('#p_lt_zoneContent_pageplaceholder_p_lt_zoneSide_logonform_lblResult').addClass(
    'alert alert-success');
});
$('#slider').anythingSlider({
    autoPlay: true,
    startPanel: 1,
    delay: 7000,
    animationTime: 600,
    expand: true,
    infiniteSlides: true,
    forwardText: "",
    backText: "",
    aspectRatio: 16 / 9,
    resizeContents: true,
    buildArrows: true,
    buildNavigation: false,
    buildStartStop: false,
  })
  // Initialize video extension
  .anythingSliderVideo({
    // video id prefix; suffix from $.fn.anythingSliderVideo.videoIndex
    videoId: 'asvideo',
    // this option replaces the `addWmodeToObject` option in the main plugin
    wmode: "opaque",
    // auto load YouTube api script
    youtubeAutoLoad: true,
    // YouTube iframe parameters, for a full list see:
    // https://developers.google.com/youtube/player_parameters#Parameters
    youtubeParams: {
      modestbranding: 0,
      autohide : 1,
      color: 'white',
      controls: 0,
      showinfo: 1,
      rel: 0,
    }
});
function logme(data) {
  if ( typeof console != 'undefined') {
    console.log(data);
  }
}

$(document).ready(function() {
  $("p").multicolorMe();
});
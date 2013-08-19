function alertme() {
  window.alert(document.querySelector("#myid"));
  window.alert(document.querySelector(".myclass"));
}

// As taken from the UnderscoreJS utility framework
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
}

// Add the resize callback but only allow it to execute once every 300 milliseconds
window.addEventListener('resize', debounce(function(event) {
  if (document.querySelector("#myid").className == "bleu") {
    document.querySelector("#myid").className = "rouge";
  } else {
    document.querySelector("#myid").className = "bleu";
  }
}, 300));
// Add the resize callback but only allow it to execute once every 300 milliseconds
window.addEventListener('resize', function(event) {
  if (document.querySelector("#myid").className == "tbleu") {
    document.querySelector("#myid").className = "trouge";
  } else {
    document.querySelector("#myid").className = "tbleu";
  }
});

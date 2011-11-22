function logme(data) {
  if (typeof console != 'undefined') {
    console.log(data);
  }
}

function clearRequest(str) {
  // mettre les caracteres en minuscules
  str = str.toLowerCase();
  // Conversion des caracteres accentues en non-accentues
  str = str.replace(/[àäâ]/gi, 'a');
  str = str.replace(/[éèëê]/gi, 'e');
  str = str.replace(/[iï]/gi, 'i');
  str = str.replace(/[oô]/gi, 'o');
  str = str.replace(/[uüû]/gi, 'u');
  str = str.replace(/[yÿ]/gi, 'y');
  // suppression caracteres non alphanumeriques
  str = str.replace(/[^a-z0-9]/gi, '');
  return str;
}

function extractUrlParams() {
  var t = location.search.substring(1).split('&');
	var f = [];
	for (var i=0; i<t.length; i++){
		var x = t[ i ].split('=');
		f[x[0]]=x[1];
	}
	return f;
}

var currentUrl = window.location.href;
var title = document.title;
var text = ''; var icon=''; var description='';var license='';var hcard='';var pname='';
if(document.getSelection()){
  text = document.getSelection();
}

if (document.querySelector('meta[name="description"]')) {
   description = document.querySelector('meta[name="description"]').content;
}

if (document.querySelector('link[rel="license"]')) {
   license = document.querySelector('link[rel="license"]').href;
}

if (document.getElementById('hCard')) {
alert('I have a hit');
   hcard = document.getElementById('hCard').innerHTML
}


if (document.getElementsByClassName('p-name')) {
   pname = document.getElementsByClassName('p-name')[0].innerHTML
}


newUrl = `https://www.downes.ca/cgi-bin/admin.cgi?action=hub&title=${title}&url=${currentUrl}&selected=${text}&description=${description}&icon=${icon}&license=${license}&hcard=${hcard}&pname=${pname}`;
window.open(newUrl,"", "width=400, height=600");

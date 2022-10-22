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
alert('I have an hCard hit');
   hcard = document.getElementById('hCard').innerHTML
}

if (document.getElementsByClassName('h-card')[0]) {
   if (document.getElementsByClassName('h-card')[0].getElementsByClassName('p-name')[0]) {
      pnameraw = document.getElementsByClassName('h-card')[0].getElementsByClassName('p-name')[0].innerHTML
      pname = pnameraw.replace(/<\/?[^>]+(>|$)/g, "");
   alert(pname);
   }
}


newUrl = `https://www.downes.ca/cgi-bin/api.cgi?cmd=edit&id=new&table=post&hub=yes&title=${title}&url=${currentUrl}&link=${currentUrl}&description=${description}${text}&icon=${icon}&license=${license}&hcard=${hcard}&author=${pname}`;
window.open(newUrl,"", "width=400, height=600");

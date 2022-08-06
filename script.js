


var ajax = new XMLHttpRequest();

ajax.onreadystatechange = function() {

    if(ajax.readyState === 4) {
       if( ajax.status === 200)
          document.getElementById("ajax")
         .innerText =
          "Name: "+JSON.parse(ajax.responseText)[0].name
          +" Age: "+JSON.parse(ajax.responseText)[0].age+'\n\n'
          +"Name: "+JSON.parse(ajax.responseText)[1].name
          +" Age: "+JSON.parse(ajax.responseText)[1].age


        else if(ajax.status)
         document.getElementById("ajax")
         .innerText = "404";
    }
}

ajax.open('GET', 'name.json')


document.getElementById("ajax").onclick = function() {
    ajax.send();
};
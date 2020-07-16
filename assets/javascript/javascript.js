$(".athraigh").on("click", function() { // jQuery click event for the class 'athraigh'
    let thisWord = $(this).children("button").text(); // store the value of the <button> in variable 'thisWord'
    let thisH3 = $(this).children("h3").text(); // store the value of the <h3> in variable 'thisH3'
    let thisParagraph = $(this).children("p:last").text(); // store the value of the LAST <p> in variable 'thisParagraph'
});

// document.querySelector(".athraigh").addEventListener("click", myFunction);


//old code for buttons
function myFunction(word) { 
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(word).innerHTML = JSON.parse(this.responseText.())[0][1];
    }
  };
xhttp.open("POST", "https://cadhan.com/api/intergaelic/3.0", true);
xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhttp.setRequestHeader("Accept","application/json");
xhttp.send("teacs="+encodeURIComponent(word)+"&foinse=ga");
}


//new code

  window.addEventListener("load", function () {
    var entry = document.getElementById("entry");
    entry.addEventListener("submit", function (event) {
      event.preventDefault();
      var focal = new XMLHttpRequest();

      focal.onreadystatechange = function(event) {
        if (focal.readyState == XMLHttpRequest.DONE) {
          if (focal.status == 200) {
            processPairs(JSON.parse(event.target.responseText));
          }
          else {
            var div=document.getElementById("output");
            div.innerHTML=focal.status.toString()+': '+focal.statusText;
          }
        }
      };

      focal.open("POST", "https://cadhan.com/api/intergaelic/3.0");
      focal.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      focal.setRequestHeader('Accept','application/json');
      var payload = '';
      var radios = document.getElementsByName('foinse');
       for (var i=0; i<radios.length; i++) {
        if (radios[i].checked) {
          payload = 'foinse='+radios[i].value+'&teacs=';
        break;
        }
      }
      payload += encodeURIComponent(document.getElementById('sourcetext').value);
      focal.send(payload);
      var div=document.getElementById("output");
      div.innerHTML='<em>Translating...</em>'
    });
  });

  function processPairs(arr) {
    var div=document.getElementById("output");
    var suppress = true;
    div.innerHTML='';
    for(var i=0; i<arr.length; i++) {
      t=arr[i][1];
      if (t=="\\n") {
        div.innerHTML+='<br/>';
        suppress = true;
      }
      else {
        if (suppress==false && !t.match(/^[.,\/;”:!?%})]$/)) {
          div.innerHTML+=" ";
        }
        suppress = (t.match(/^[“\/$(\[#{]$/)!==null);
        div.innerHTML+=t;
      }
    }
  }
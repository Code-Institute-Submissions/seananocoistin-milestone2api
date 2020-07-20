function queryString(form) {
  return Array.from(form.querySelectorAll('textarea, [checked]'))
    .map(el => {
      const name = el.getAttribute('name');
      return name + "=" + encodeURIComponent(form[name].value);
    })
    .join('&');
}

document.getElementById('IGform').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('output').textContent = "Loading...";
  fetch('https://cadhan.com/api/intergaelic/3.0', {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: queryString(this)
    })
    .then(r => r.json())
    .then(reply => {
      //document.getElementById('output').textContent = JSON.stringify(reply);
      console.log(reply);
      processPairs(reply);
    });
});

function processPairs(arr) {
  var div = document.getElementById("output");
  var suppress = true;
  div.innerHTML = '';
  for (var i = 0; i < arr.length; i++) {
    t = arr[i][1];
    if (t == "\\n") {
      div.innerHTML += '<br/>';
      suppress = true;
    } else {
      if (suppress == false && !t.match(/^[.,\/;”:!?%})]$/)) {
        div.innerHTML += " ";
      }
      suppress = (t.match(/^[“\/$(\[#{]$/) !== null);
      div.innerHTML += t;
    }
  }
}

htmlString += "<div>";
htmlString += "<h2 onclick=\"test(this)\">"; 
htmlString += wordList[i].word;
htmlString += "</h2>";
htmlString += "<p>";
htmlString += wordList[i].gender;
htmlString += "</p>";
htmlString += "<p>";
htmlString += wordList[i].definition;
htmlString += "</p>";
// write the code for .examples here
htmlString += "</div>";

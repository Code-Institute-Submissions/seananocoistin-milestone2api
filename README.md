
## Irish Standardised Spelling API
This simple website is to demonstrate how an API can be used to provide standardised spellings of words in the Irish language. The work is done behind the scenes away from the eyes of the user. All that is required of the user is to click a word and then see the modern, standardised spelling of the word.

The words in their original spelling are sent to the API and then published on the screen in standardised spelling.

## Croidhe Cainnte Chiarraighe - the largest Irish dictionary ever
The words are taken from entries in the largest Irish dictionary ever compiled, **Croidhe Cainnte Chiarraigh** (its modern spelling would Croí Cainte Ciarraí and its meaning is *"the core of Kerry talk"*).

The dictionary was compiled in the late 1930s and early 1940s but was unfortunatley never published. It was written using older spellings. In the 1940s, the Irish government introduced standardised spelling for the Irish language for educational, legislative, and administrative purposes. That standardised spelling has been used by most people since then. This API and website is to demonstrate how Croidhe Cainnte Chiarraighe could be converted to the standardised spelling so that the dictionary would be usable by people today without having to be familiar with the older spelling.

Croidhe Cainnte Chiarraighe is an enormous text with over 60,000 entries and 2.2 million words. It is [available for free as a PDF file](https://www.forasnagaeilge.ie/about/an-gum/croidhe-cainnte-ciarraighe/?lang=en) albeit a PDF file with more than 4,000 pages. While the PDF file can be consulted either by browsing or by using the Control + F function to open up a search field to find words, it would be much better if the dictionary was converted into HTML format and laid out in a much more user-friendly way. Part of making that user friendly would be to have the option to see it in its original state as well as in standardised spelling. In that way, the text would be relevant to Irish speakers of this generation.

## Testing

To convert the whole dictionary into a website with standardised spelling would take a huge amount of time. Therefore, I selected a small sample of headwords from each of the letters in the Irish alphabet (a, b, c, d, e, f, g, h, i, l, m, n, o, p, r, s, t, u) apart from the letter H. As the letter H is not a real letter in the Irish language, but functions as a sound changer, there are not many headwords that begin with H, therefore it was omitted. 

The words chosen were:

    acfuinn

    aithmhéalach

    brúideamhlacht

    bréagnughadh

    cáilidheacht

    críochnamhail

    dearbhughadh

    deóraidheacht

    éaluightheach

    éirighthe

    fáiltiughadh

    fearamhlacht

    geineamhaint

    giollaidheacht

    inneamhail

    imthighthe

    lagughadh

    lúthgháireach

    maoluighim

    marcaidheacht

    naomhtha

    nidh 

    oibridhe

    osnaighil

    páirtidheacht

    puiblidheacht

    riaghail

    ríoghdha

    sáruightheach

    slighe

    teangmhálaidhe

    toiceamhail

    truailliughadh

    útamálaidhe


The reason for their selection was that they had to be in the old spelling and also had to be significantly different from their newer, standardised spelling so that the user could see the difference immediately.

Some words such as **"abair"**, **"duine"**, **"tír"**, *etc.* never changed so there would have been no point in inserting them as samples. 

Likewise a word such as **"muinntir"** has a standardised spelling of **"muintir"**. It is too close to its newer spelling so it was best to avoid it for want of significant difference.


All one has to do is click the words and they get sent to the API and then they return to be displayed in their modern standardized spellings. It's like magic!

This approach has great potential for people using old texts in any language. If texts can be sent to an API to whip them into shape with modern spelling, then old texts could be made easy to read for people familiar with modern spelling but who are not familiar with ancient or non-standardised spelling. The user only has to click a button and the work is done for them.

## Built on
**Primary function**

The API that was used was the [**Caighdeán API**](https://github.com/kscanne/caighdean/blob/master/API.md)

It is available to use for free. It is an API that require words to be sent to it.


**Secondary function**

[Bootstrap](https://getbootstrap.com/) was also used in order to provide some styling to the webpage.

https://hashtagcolor.com/ff7f50


## Sample Code
Here is an example of the code used in the website:

function myFunction(word) { 
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById(word).innerHTML = JSON.parse(this.responseText.toUpperCase())[0][1];
    }
  };
xhttp.open("POST", "https://cadhan.com/api/intergaelic/3.0", true);
xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhttp.setRequestHeader("Accept","application/json");
xhttp.send("teacs="+encodeURIComponent(word)+"&foinse=ga");
}


## Testing and bugs
When testing the API, it was discovered that some words were not converted by it. One such example is the word **imshníomhacht**. What is interesting is that if one used the word **imshníomh**, which is the basis of the word **imshníomhacht**, the API does recognize it and converts it to its modern spelling **imní**. This is a small flaw in the API.

This indicates that even though the API would be able to undertake the majority of the conversion work when updating the spelling in an old Irish text, human intervention is required to ensure a full conversion. The API does have some blind spots.

**Lag** - there is, unfortunatley, a noticeable lag when one clicks the buttons. It takes two second for the standardised spelling to appear. This is something that the designer of the API could work to improve if it was required for major operations. Users might not mind a lag for one or two headwords, but it could become annoying if it was required for a large website.

# Irish Standardised Spelling API
This website is to demonstrate how an API can be used to provide standardised spellings of words in the Irish language. The work is done behind the scenes away from the eyes of the user. All that is required of the user is to click a word or a sentence and then see the modern, standardised spelling of the words.

The words in their original spelling are sent to the API and then published on the screen in standardised spelling.

## Croidhe Cainnte Chiarraighe - the largest Irish dictionary ever
The words are taken from entries in the largest Irish dictionary ever compiled, **Croidhe Cainnte Chiarraigh** (its modern spelling would Croí Cainte Ciarraí and its meaning is *"the core of Kerry talk"*).

The dictionary was compiled in the late 1930s and early 1940s but was unfortunatley never published. It was written using older spellings. In the 1940s, the Irish government introduced standardised spelling for the Irish language for educational, legislative, and administrative purposes. That standardised spelling has been used by most people since then. This API and website is to demonstrate how Croidhe Cainnte Chiarraighe could be converted to the standardised spelling so that the dictionary would be usable by people today without having to be familiar with the older spelling.

Croidhe Cainnte Chiarraighe is an enormous text with over 60,000 entries and 2.2 million words. It is [available for free as a PDF file](https://www.forasnagaeilge.ie/about/an-gum/croidhe-cainnte-ciarraighe/?lang=en) albeit a PDF file with more than 4,000 pages. While the PDF file can be consulted either by browsing or by using the Control + F function to open up a search field to find words, it would be much better if the dictionary was converted into HTML format and laid out in a much more user-friendly way. Part of making that user friendly would be to have the option to see it in its original state as well as in standardised spelling. In that way, the text would be relevant to Irish speakers of this generation.

## User Stories
Users of the website are able to search for words, filter words, view words, convert the spelling of the words, restore the original spelling, and use the API interface with their own texts and words in order to see how it works themselves. In case they do not have a word or a extract available to use, an extract from an Irish translation of a novel that it is written in the older spelling is provided. With the click of a button, the extract is inserted into the textbox for the user. They only need to click the convert button ("Tiontaigh an téacs") in order for the conversion to occur. They will see the text in standardised spelling in the space below.

The users are provided with a relatively shorts information page about the dictionary, Maidir leis an bhfoclóir, as well as a page, Treoracha úsáide, with instructions on how to use the dictionary. The website has been designed in such a way as to make the use of the website very easy, intuitive, and enjoyable. Really users should not need to be given instructions on how to use the website but they are provided for them just in case.

## User Experiences
The user is able to use the website in various ways. 

### FILTERING
Firstly, the user can select a word the screen upon initial viewing of the website.
They can search for a word using the search bar at the top of the index.html file. This search bar works as a filter to find words that contain the letters that the user enters. With each new letter, the choice of words becomes more limited and the desired word or words will be presented.
When searching for words, the user may click the "Scag na focail" (Filter the words) button to show new buttons. The new buttons show the different types of words such as feminine nouns, masculine nouns, adjectives, verbs, etc. By clicking them one by one, the user can be provided with specific categories of words rather than a long, general list of words. This is particularly useful for people doing linguistic studies of the dictionary.
Users can also use the alphabet search buttons to filter the dictionary entries according to the first letter in the words. This is how printed dictionaries are categorised so, it makes sense to offer users the same on a web dictionary.
To cancel all of the different types of filter, the user only has to click on "Cuir na scagairí ar ceal" (Cancel the filters) button. This will cancel all filters applied and will present the dictionary to the user as they would have initially seen it.

These different ways of filtering the words makes for an enjoyable and rich way of exploring and using the dictionary.

### WORD VIEWING
When a users selects a word to look at, she or he is presented with a headword. Close to the headword, in the upper righthand corner is a + button. This is to allow the headword box to expand to show the full entry. The user can now see the grammitcal information about the word in question, its definitions, and usually a number of sample sentences in order to see how the word is used. (Not all words have sample sentences e.g. ubhlúird.) The user will see the words as they were written originally. So how can they view the modern, standardised spelling?

### CONVERSION
In order to view to the modern spelling of the entries, the user only has to click on the words to see their standardised forms. The headword, the definitions, and the sample sentences can be clicked. By clicking the words, they are sent to the API for conversion and then returned. The words change colour from black to green in order to indicate that they have been converted. Not all words have changed spelling, so there may be no difference in the spelling but the colour of the words is green. This is a very easy way for a user to use the website and be able to see both the original and the standardised spelling.

### RETURN TO ORIGINAL SPELLING
When the user has seen the standardised spelling, she or he may wish to return to the original spelling. The words that can be clicked are indicated to the user by the cursor which changes shape to the pointer icon which means that the words can clicked. All that they have to do is click the button at the bottom of the word box, "Fill ar an litriú bunaidh" (Return to original spelling) button. This will cancel the API conversion and restore the original spelling. The colour of the words will change from green back to black. It is very simple and occurs without delay.

To convert the whole dictionary into a website with standardised spelling would take a huge amount of time. 

All one has to do is click the words and they get sent to the API and then they return to be displayed in their modern standardized spellings. It's like magic!

This approach has great potential for people using old texts in any language. If texts can be sent to an API to whip them into shape with modern spelling, then old texts could be made easy to read for people familiar with modern spelling but who are not familiar with ancient or non-standardised spelling. The user only has to click a button and the work is done for them.

## Device usage
The dictionary is best viewed and used on a desktop computer or laptop computer. While a user can view and use it on a mobile device, it is designed for use on a desktop. It is most likely that the users who would use the website would do so while engaging in serious study or reading of old texts.

## Built on
**Primary function**

The API that was used was the [**Caighdeán API**](https://github.com/kscanne/caighdean/blob/master/API.md)

It is available to use for free. It is an API that require words to be sent to it.


**Secondary function**

https://hashtagcolor.com/ff7f50

https://unicode-table.com/en/2B8C/


## Sample Code
Here is an example of the code used in the website:


## Header image
The lovely image of the hills and ocean are of Ceann Sibéal in Corca Dhuibhne. This was the area from which the compiler of the dictionary hailed. It is a Gaeltacht area. Therefore, it was fitting to use the image as a decoration for this website. Of interest is the small white feature near the top of the hill furthest to the left. It was a temporary set that was used to film a scene for Rogue One, the Star Wars film. I took that photograph in May 2016 while visiting the area.
## Testing and bugs

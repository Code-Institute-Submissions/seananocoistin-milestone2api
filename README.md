<h1 align="center">Croidhe Cainnte Chiarraighe</h1>

<h2 align="center">Irish Standardised Spelling API</h2>

This website is to demonstrate how [An Caighdeánaitheoir API](https://github.com/kscanne/caighdean/blob/master/API.md) can be used to provide standardised spellings of words in the Irish language. The work is done behind the scenes away from the eyes of the user. All that is required of the user is to click a word or a sentence and then see the modern, standardised spelling of the words.

The words in their original spelling are sent to the API and then published on the screen in standardised spelling.

## Croidhe Cainnte Chiarraighe - the largest Irish dictionary ever
The words are taken from entries in the largest Irish dictionary ever compiled, **Croidhe Cainnte Chiarraigh** (its modern spelling would Croí Cainte Ciarraí and its meaning is *"the core of Kerry talk"*).

The dictionary was compiled in the late 1930s and early 1940s but was unfortunatley never published. It was written using older spellings. In the 1940s, the Irish government introduced standardised spelling for the Irish language for educational, legislative, and administrative purposes. That standardised spelling has been used by most people since then. This API and website is to demonstrate how Croidhe Cainnte Chiarraighe could be converted to the standardised spelling so that the dictionary would be usable by people today without having to be familiar with the older spelling.

Croidhe Cainnte Chiarraighe is an enormous text with over 60,000 entries and 2.2 million words. It is [available for free as a PDF file](https://www.forasnagaeilge.ie/about/an-gum/croidhe-cainnte-ciarraighe/?lang=en), albeit a PDF file with more than 4,000 pages. While the PDF file can be consulted either by browsing or by using the Control + F function to open up a search field to find words, it would be much better if the dictionary was converted into HTML format and laid out in a much more user-friendly way. Part of making that user friendly would be to have the option to see it in its original state as well as in standardised spelling. In that way, the text would be relevant to Irish speakers of this generation.

## User Experience (UX)
Users of the website are able to search for words, filter words, view words, convert the spelling of the words, restore the original spelling, and use the API interface with their own texts and words in order to see how it works themselves. In case they do not have a word or a extract available to use, an extract from an Irish translation of a novel that it is written in the older spelling is provided. With the click of a button, the extract is inserted into the textbox for the user. They only need to click the convert button ("Tiontaigh an téacs") in order for the conversion to occur. They will see the text in standardised spelling in the space below.

The users are provided with a relatively short information page about the dictionary, Maidir leis an bhfoclóir, as well as a page, Treoracha úsáide, with instructions on how to use the dictionary. The website has been designed in such a way as to make the use of the website very easy, intuitive, and enjoyable. Really users should not need to be given instructions on how to use the website but they are provided for them just in case.

- ### User stories
    - #### First Time User 
        1. As a First Time User, I want to be greeted with an easily navigable website which would require a simple and clean navigation bar.
		2. As a First Time User, I want to instantly begin using the website without having to learn how to use it.
		3. As a First Time User, I want to quickly find words in the dictionary which means having various ways to find and filter words.
		4. As a First Time User, I want to be able to see standardised spellings of words in an easy and fast manner.
		5. As a First Time User, I want to be able to return to the initial setting of the dictionary on the home page and start searching for words afresh.
		6. As a First Time User, I want there to be instructions on how to use the website in case that I am unsure of how to use it. The instructions should be clear, easy to follow, and have images to show what to do.
    - #### Curious user
        1. As a Curious user, I want to be able to try for myself the API that converts the older texts into standardised spelling.
		2. As a Curious user, I want to be able to read more about the dictionary, who compiled it, and where I can learn more about it.

- ### Design
    - #### Colour Scheme
        - The main colours I chose for the project were lightyellow, white, rgba(255,127,80,0.7), and forestgreen.
		- Reasoning for the choice of colours:\
		I chose lightyellow as a background colour for the pages as I think that it makes the website easy on the eye,
		whereas using white everywhere would be too bright.
		White was chosen as the background colour of the word entries as they would be clearer.
		rgba(255,127,80,0.7) was chosen as a nice warm colour to emphasise certain buttons. It is neither dark nor too bright. It has the right amount of brightness to make people see the buttons easily but not
		be so bright to be glaring and distracting when using the website. It also needed to be a colour that would match well with the lightyellow.
		Forestgreen was used as another colour for buttons as it would be too much for all buttons to be rgba(255,127,80,0.7). The dictionary is based on Irish as it is spoken in Ciarraí in the southwest of Ireland.
		Green and yellow are the county colours of the that county, so by using lightyellow and forestgreen, it gives a nod to the area from which the dictionary comes.\
		I used the website https://hashtagcolor.com/ to help me find nice matching colours. While trying to find good colours, I read that teal matches with coral. I tried that combination but I found it
		too strong so I played around with many variations of greens and yellow before I eventually settled on forestgreen.

    - #### Typography
        - I tried various fonts for the website to see which would work best. I wanted the font to be clear, modern, and easy on the eye. It should not be too compressed or narrow as it would make it difficult
		for users to read the words on the website. Having tried Arial, Helvetica, Lato, Open Sans, Roboto and others, I decided that Lato was nicest font for this website.\
        I looked at the font on other dictionary websites such as [Larousse.fr](https://www.larousse.fr/dictionnaires/francais/) and [Lexico.com](https://www.lexico.com/definition/table) to examine what fonts other dictionaries use. I found that both of those websites
		use nice fonts but I was not convinced that the fonts used by Larousse (Roboto and Firasans) would work for Croidhe Cainnte Chiarraighe. In the future, it would be nice to offer users a choice of fonts that
		could be activated by the click of a button.

    - #### Imagery
        - While thinking of how the website should look, I knew that I would need a large image that could be used a backdrop or background image. I sought an image from an Irish dictionary but in the end,
		I chose to use an image from west Ciarraí where the compiler of the dictionary, Seán a' Chóta, was from. I had the perfect photograph for it as I took a beautiful photograph of Ceann Sibéal while
		visiting the area in 2016. The use of the image showing the area where Seán a' Chóta was from would leave no doubt in the mind of the user about where the dictionary was from.
		Therefore, the image at the top of the website serves two purposes.\
        Firstly, it is a very nice image of a stunningly beautiful part of Ireland, and secondly, it fortifies the connection between the
		words and phrases in the dictionary and the image that the user will have in her or his mind of where those words are spoken.

### User actions
The user is able to use the website in various ways.

### FILTERING
Firstly, the user can select a word the screen upon initial viewing of the website.\
They can search for a word using the search bar at the top of the index.html file. This search bar works as a filter to find words that contain the letters that the user enters. With each new letter, the choice of words becomes more limited and the desired word or words will be presented.\
When searching for words, the user may click the "Scag na focail" (Filter the words) button to show new buttons. The new buttons show the different types of words such as feminine nouns, masculine nouns, adjectives, verbs, etc. By clicking them one by one, the user can be provided with specific categories of words rather than a long, general list of words. This is particularly useful for people doing linguistic studies of the dictionary.
Users can also use the alphabet search buttons to filter the dictionary entries according to the first letter in the words. This is how printed dictionaries are categorised so, it makes sense to offer users the same on a web dictionary.\
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

* ### Wireframes
Home Page Wireframe - [View](https://github.com/seananocoistin/milestone2api/blob/master/assets/images/index.html.png)

Maidir leis an bhfoclóir Wireframe - [View](https://github.com/seananocoistin/milestone2api/blob/master/assets/images/maidirleis.html.png)

Treorach úsáide Wireframe - [View](https://github.com/seananocoistin/milestone2api/blob/master/assets/images/treoracha.html.png)

An Caighdeánaitheoir Wireframe - [View](https://github.com/seananocoistin/milestone2api/blob/master/assets/images/caighdeanaitheoir.html.png)

## Device usage
The dictionary is BEST viewed and used on a desktop computer or laptop computer. While a user can view and use it on a mobile device, it is designed for use on a desktop. It is most likely that the users who would use the website would do so while engaging in serious study or reading of old texts.

## Technologies Used

**Languages Used**

HTML5

CSS

JavaScript

**Primary function**

The API that was used was the [**Caighdeán API**](https://github.com/kscanne/caighdean/blob/master/API.md)
It is available to use for free. It is an API that require words to be sent to it.


**Secondary function**

https://hashtagcolor.com/ - used to find and test colours.

https://unicode-table.com/en/2B8C/ - used to find the go back arrow.

[Balsamiq](https://www.balsamiq.com/) - used to make the wireframe for the pages.

[Diffchecker](https://www.diffchecker.com/) - this tool was useful to compare different versions of files

[Github](https.github.com) - used to store and share the project.

[Gitpod](https://www.gitpod.io/) - used to design and upload the wepages to Github.com.

[Google Fonts](https://fonts.google.com/) - used to provide the Lato font for the website.

[HTML Formatter](https://webformatter.com/) - used to correct the indentation of the html files.

[LightShot](https://app.prntscr.com/en/index.html) - used to make the images taken from the webpages.


## Sample Code
Here is an example of the code used in the website;

	elem.forEach(i=>
		i.addEventListener('click',function(){
			let value = this.innerText
			let cur = this
			console.log(value)
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					let res = JSON.parse(this.responseText);
					let signs = [':',',','.','!','?']
					let innerText = res.reduce((text,i)=>{
						if(signs.includes(i[1])){
							text += i[1]+' '
						}else{
							text += ' '+i[1]
						}
						return text
					},'').replace(/\\n/g,'')
					if (cur.nodeName === 'H3'){
						let newInnerText = ''
						innerText.split('-').forEach(item=>{
							if(item.length>2){
								newInnerText+=`<p>- ${item}</p>`
							}
						})
						cur.innerHTML = newInnerText
					}else{
						cur.innerHTML = innerText
					}

					cur.style.color = 'green'
				}
			};
			xhttp.open("POST", "https://cadhan.com/api/intergaelic/3.0", true);
			xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhttp.setRequestHeader("Accept","application/json");
			xhttp.send("teacs="+encodeURIComponent(value)+"&foinse=ga");
		})
	)


## Header image
The lovely image of the hills and ocean are of Ceann Sibéal in Corca Dhuibhne. This was the area from which the compiler of the dictionary hailed. It is a Gaeltacht area. Therefore, it was fitting to use the image as a decoration for this website. Of interest is the small white feature near the top of the hill furthest to the left. It was a temporary set that was used to film a scene for Rogue One, the Star Wars film. I took that photograph in May 2016 while visiting the area.

## Testing
The W3C Markup Validator, W3C CSS Validator Service, and JSLint were used to validate every page of the project to ensure there were no syntax errors in the project.

[W3C Markup Validation Service](https://validator.w3.org/)

[W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)

[JSLint](https://www.jslint.com/)

While working at the caighdeanaitheoir.html file, the width had to be corrected as the textarea box and the text extract at the bottom were too wide so the width in the CSS had to be changed.

It was discovered that the compiler of the dictionary had used colons as a way to seperate different meanings of a word. There could be two or three meanings separated by colons in sample sentences. The problem was that the JavaScript code used a colon as a way to split samples sentences with the sample sentence to the left of the colon and the meaning to the right of the colon. If there was more than one meaning, the colon after the first meaning meant that the other meaning(s) after it were obliterated and left unseen on the screen. In order to solve this problem, I changed the colons to semi-colons which meant that all meanings can be displayed.
Here is an example of that problem. In the first instance, the meansings "rathamhail" and "tairbheach" are present but only rathamhail will appear on the screen, due to the presence of the colon after rathamhail. By changing the colon to a semi-colon, the two different meanings now appear. This minor change does not affect the dictionary in any way, it actually ensures that the meanings listed for a sample sentence all appear.
"“An raibh do thurus éirighthighe?” – “go hiongtach, tá dachad púnt dá bharr agam”: rathamhail: tairbheach", had to be changed to "“An raibh do thurus éirighthighe?” – “go hiongtach, tá dachad púnt dá bharr agam”: rathamhail; tairbheach",
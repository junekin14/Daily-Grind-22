//alert("hola!");

/*
Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page
that rotates unique colors and content for each weekday (Sunday to Saturday)
into the page.  The content must include:

One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph
must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content

The items we need are:

image (a pic of the coffee)
alt (a description of the pic for people who can't see it)
description (a note about the coffee)
weekday 
color (to support the coffee)
The unique color could affect the background HTML, or an element on the page
for each day of the week.  All of the above must occur within one page.

*/
function coffeeTemplate(coffee){
    return `<p>
            <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong >${coffee.name}</strong>, ${coffee.desc}
            </p>`;
}

let myDate = new Date();
let today = myDate.getDay();
let coffee = "";
let myDay = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);


if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }
 else { 
    myDay = today;
}

 //convert the string to an interger
today= parseInt (today);

switch(today){

    case 0: 
        today = "Sunday"
        coffee = {
            color:"tan",
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A picture of a caramel latte ",
            day:"Sunday",
            desc:`Caramel lattes are sweet !` ,
            info:"Coffee is a drink prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It is the most popular hot drink in the world."
        };
    break;

    case 1: 
        today = "Monday"
        coffee ={   
            color:"pink",
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A picture of a bubble tea",
            day:"Monday",
            desc:`I love bubble tea. Especially Boba.` ,
            info:"Bubble tea is a tea-based drink that originated in Taiwan in the early 1980s. Taiwanese migrants brought it to the United States in the 1990s, initially in California through regions like Los Angeles county, but has likewise spread to other countries where there is a large East Asian diasporic population."
        };
    break;

    case 2: 
        today = "Tuesday"
        coffee = {
            color:"brown",
            name:"Cold Brew",
            pic:"cold-brew.jpg",
            alt:"A picture of cold brew",
            day:"Tuesday",
            desc:`I love cold brew!`,
            info: "Bubble tea is a tea-based drink that originated in Taiwan in the early 1980s. Taiwanese migrants brought it to the United States in the 1990s, initially in California through regions like Los Angeles county, but has likewise spread to other countries where there is a large East Asian diasporic population."
            
        };
    break;

    case 3: 
        today = "Wednesday"
        coffee = {
            color:"black",
            name:"Drip",
            pic:"drip.jpg",
            alt:"A picture of drip coffee",
            day:"Wednesday",
            desc:`Drip coffee is disgusting.`,
            info: "Brewed coffee is made by pouring hot water onto ground coffee beans, then allowing to brew. There are several methods for doing this, including using a filter, a percolator, and a French press."
        };
    break;

    case 4: 
        today = "Thursday"
        coffee = {
            color:"gold",
            name:"Frappaccino",
            pic:"frappaccino.jpg",
            alt:"A picture of a frappaccino drink ",
            day:"Thrusday",
            desc:`Wednesdays: frappaccinos.`,
            info:"Frappuccino is a line of blended iced coffee drinks sold by Starbucks. It consists of coffee or crème base, blended with ice and ingredients such as flavored syrups and usually topped with whipped cream and or spices."
        };
    break;

    case 5: 
        today = "Friday"
        coffee = {
            color:"orange",
            name:"Pumpkin Spice Latte",
            pic:"pumpkin-spice-latte.jpg",
            alt:"A picture of pumpkin spice latte",
            day:"Friday",
            desc:`Friday: Pumpkin Spice Latte!`,
            info: "The Pumpkin Spice Latte is a coffee drink made with a mix of traditional autumn spice flavors, steamed milk, espresso, and often sugar, topped with whipped cream and pumpkin pie spice. The beverage is most commonly associated with Starbucks, which first offered the drink in the fall of 2003."
        };
    break;

    case 6: 
        today = "Saturday"
        coffee = {
            color:"red",
            name:"Mocha",
            pic:"mocha.jpg",
            alt:"A picture of a mocha ",
            day:"Saturday",
            desc:`Saturdays:Mocha`,
            info:"A caffè mocha, also called mocaccino, is a chocolate-flavoured warm beverage that is a variant of a caffè latte, commonly served in a glass rather than a mug. Other commonly used spellings are mochaccino and also mochachino."
        };
    break;

    default:
        alert("Something went wrong");

}

console.log(coffee);
document.getElementById("coffee-template").innerHTML= coffeeTemplate(coffee)
document.querySelector("html").style.backgroundColor = coffee.color;

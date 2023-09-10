function loadRSS() {
    //Use CORS API website as proxy
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    //Declare the URL where we fetch RSS file
    let url = "https://www.espn.com/espn/rss/nba/news";
    //BBC RSS: https://www.espn.com/espn/rss/nba/news
    //Create an XMLHttpRequest Object to request XML file (data) through HTTP protocol
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", proxy + url, true);
    xhttp.send();
    //Process RSS file when it has been loaded successfully
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //Load XML file as "XML" format and parse/process it by calling function parseRSS()
            let rss = this.responseText;
            parseRSS(this);
        }
    };
}
function parseRSS(rss) {
    //Load all "items" inside the RSS document, each item is a news
    let items = rss.responseXML.getElementsByTagName("item");
    let rssContent = "";//varible "rssContent" is used to store rss content in HTML format
    //Loop through all items and extract child node content: "title", "link", "description" and "pubdate"
    for (let i = 0; i < items.length; i++) {
        let nodes = items[i].children;
        //Extract "title", "link", "description" and "pubdate" of each "node"
        let title, pubdate, description, link;
        for (let j = 0; j < nodes.length; j++) {
            if (nodes[j].tagName == "title") {
                title = nodes[j].childNodes[0].nodeValue;
            } else if (nodes[j].tagName == "link") {
                link = nodes[j].childNodes[0].nodeValue;
            } else if (nodes[j].tagName == "description") {
                description = nodes[j].childNodes[0].nodeValue;
            } else if (nodes[j].tagName == "pubDate") {
                pubdate = nodes[j].childNodes[0].nodeValue;
            }
        }
        //Format the extracted information above in HTML format and append it to the "rssContent" variable
        //each item (news) is wrapped inside a <div>
        rssContent += `<div style="background-color: gray; margin: 2px;"> 
    <h3>${title}</h3>
    <p style="font-style: italic;">${pubdate}</p>
    <p>${description}</p>
    <p><a href="${link}">Read more</a></p>
     </div>`;
    }
    //Display the "rssContent" on the webpage
    document.getElementById("rssFeed").innerHTML = rssContent;
}  
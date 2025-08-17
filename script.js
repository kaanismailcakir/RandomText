let quant = [];
let color = ["#000080","#808000","#ffa500",	"#da70d6","#eee8aa","#ff0000","#2e8b57","#87ceeb","#708090","#008080","#d8bfd8","#ff6347","#ee82ee","#ffff00","#9acd32"];

function GetApi() {
    return fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data =>{

        quant=data
        Change();
    });
}

function Change() {
    let count = quant.length;
    let rndNum = Math.floor(Math.random()*count);

    document.getElementById("text").innerText = quant[rndNum].text;
    document.getElementById("author").innerText ="-"+ quant[rndNum].author;


    let rndColor = Math.floor(Math.random()*15);

    document.body.style.backgroundColor=color[rndColor];
}

function ShareTweet() {
    let text = document.getElementById("text").innerText;

    window.location.href="twitter"+endcodeURIComponent(""+text+"");
}

GetApi()
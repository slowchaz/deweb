document.body.style.border = "5px solid red";
console.log("hello! deweb time!");



let hostname = window.location.hostname;

let site = getSiteName(hostname);
let pathname = window.location.pathname;

let spans = document.getElementsByTagName("span");


// if (site == "youtube") {
//     console.log("youtube deweb");
//     console.log(pathname);

//     if (pathname == "/feed/subscriptions") {

//         try {

//             for (let i = 0; i < spans.length; ++i) {
//                 console.log(i);
//                 // Check if they contain the text 'Promoted'
//                 if (spans[i].innerHTML.includes("SHORTS")) {
//                     console.log("shorts found");
//                     // Get the div that wraps around the entire ad
//                     let card = spans[i].closest("ytd-grid-video-renderer");


//                     // Make the ad disappear!
//                     card.setAttribute("style", "display: none !important;");
//                 }
//             }

//         }
//         catch (error) {
//             console.log(error);
//         }
//     }


// } else {
//     console.log(site + " is not yet available for dewebbing :(");
// }


console.log(site + " is not yet available for dewebbing :(");


function getSiteName(hostname) {
    if (getCharacterCount(hostname) == 1) {
        return hostname.substring(0, hostname.lastIndexOf("."));
    }
    else {
        return hostname.substring(hostname.indexOf(".") + 1, hostname.lastIndexOf("."));
    }
}


function getCharacterCount(hostname) {
    var result = 0, i = 0;
    for (i; i < hostname.length; i++)if (hostname[i] == '.') result++;
    return result;
};
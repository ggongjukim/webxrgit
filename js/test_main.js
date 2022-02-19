document.querySelectorAll(".pc").forEach(a=>a.style.display = "none");
document.querySelectorAll(".mo").forEach(a=>a.style.display = "none");

function ShowPagenavJs(){
        console.log('ShowPagenavJs');
        document.querySelectorAll(".pc").forEach(a=>a.style.display = "block");
        document.querySelectorAll(".mo").forEach(a=>a.style.display = "block");

        //모바일이면 pc navigation 끄기
        var ratio = window.devicePixelRatio; 
        if(ratio > 1){ 
                document.querySelectorAll(".pc").forEach(a=>a.style.display = "none");
        }

}

// var lengthOfArray=arrayOfElements.length;

// for (var i=0; i<lengthOfArray;i++){
//     arrayOfElements[i].style.display='none';
// }
// off();
// function off(){
//         document.querySelectorAll(".page-nav .pc ul").forEach(a=>a.style.opacity = "0.0");
// }

// function ShowPagenavJs(){
//         console.log('ShowPagenavJs');
//         document.querySelectorAll(".page-nav").forEach(a=>a.style.display = "block");
// }

function getURL(text)
{
     switch(text)
         {
            case "Start":
                console.log("getURL : Start");   
                break;
            case "무형유산":
                console.log("getURL : 무형유산");   
                // window.location = '../intangible.html';
                location.href= "intangible.html";
                break;
            case "자연유산":
                console.log("getURL : 자연유산");   
                // window.location = '../NaturalHeritageBuild/index.html';
                location.href= "natural.html";
                break;
            case "유형유산":
                console.log("getURL : 유형유산");   
                // window.location = '../TangibleHeritageBuild/index.html';
                location.href= "tangible.html";
                break;
        }
        
}
// var Pagenav = document.querySelectorAll('.page-nav');
// Pagenav.forEach(a=>a.style.display = "none");
// function ShowPagenavJs(){
//         Pagenav.forEach(a=>a.style.display = "block");
// }



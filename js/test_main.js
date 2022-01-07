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


//Mobile여부를 구분하기 위함 
var uAgent = navigator.userAgent.toLowerCase(); // 아래는 모바일 장치들의 모바일 페이지 접속을위한 스크립트 
var isMobile  = false;
var mobilePhones = new Array('iphone', 'ipod', 'ipad', 'android', 'blackberry', 'windows ce','nokia', 'webos', 'opera mini', 'sonyericsson', 'opera mobi', 'iemobile'); 
for (var i = 0; i < mobilePhones.length; i++){ 
        if (uAgent.indexOf(mobilePhones[i]) != -1){ 
                console.log("모바일입니다");
                isMobile = true; 
        } 
};

function startFS() {
        console.log("fullscreen 함수 실행")
        var element = document.documentElement;//document.getElementsByTagName('html');

        if (element.requestFullScreen) {

                element.requestFullScreen();
                console.log("requestFullScreen");

        } else if (element.webkitRequestFullScreen) {

                element.webkitRequestFullScreen();

                console.log("webkitRequestFullScreen");
        } else if (element.mozRequestFullScreen) {

                element.mozRequestFullScreen();

                console.log("mozRequestFullScreen");
        } else if (element.msRequestFullscreen) {

                element.msRequestFullscreen(); // IE

                console.log("msRequestFullscreen");
        }
        else {
                console.log("nothing");
        }

        if (isMobile) {

                console.log("세로 모드 인가요? :" + window.matchMedia('(orientation: portrait)').matches);
                console.log("현재 상태 : " + window.screen.orientation.type); 
                window.screen.orientation.lock('landscape');
        }

}




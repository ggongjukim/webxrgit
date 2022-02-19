$(document).ready(function(){


    // 메뉴 토글
    $('.menu .menu-bt').click(function(){
        $('.menu').toggleClass('on');
    });
    
    // 메뉴
    $('.gnb li').click(function(){
        $('.gnb li').removeClass();
        $(this).addClass('on');
        
        $('.pop').hide();
    });
    
    // 버튼
    $('.lnb li button').click(function(){
        $(this).toggleClass('on')
    });
    
    //3d에셋 팝업창
    $('.asset').click(function(){
        $('.list-box1').fadeIn();
    });
    $('.list-box1 .close').click(function(){
        $('.list-box1').fadeOut();
    });
    
    // 3d에셋 드롭다운
    $('.list-box1 .list-wrap .box .title i').click(function(){
    $('.list-box1 .list-wrap .box .title i').parents('.title').siblings('ul').slideUp();
        $(this).parents('.title').siblings('ul').slideDown();
    })
    
    //360vr 팝업창
    $('.vr').click(function(){
        $('.list-box2').fadeIn();
    });
    $('.list-box2 .close').click(function(){
        $('.list-box2').fadeOut();
    });
    
    // 360vr 드롭다운
    $('.list-box2 .list-wrap .box .title i').click(function(){
        $('.list-box2 .list-wrap .box .title i').parents('.title').siblings('ul').slideUp();
        $(this).parents('.title').siblings('ul').slideDown();
    })
    
    // 페이지네이션 버튼
    $('.page-nav.mo ul li').click(function(){
    
        $('.page-nav.mo ul li').removeAttr('id', 'on');
        $('.page-nav.mo ul li div').removeAttr('id', 'on');
        $('.page-nav.mo ul li p').removeAttr('id', 'on');
    
        //눌렀을때 계속 보이게 하는거
        $(this).attr('id', 'on');
        $(this).find('div').attr('id', 'on');
        $(this).find('p').attr('id', 'on');
    });

    // 페이지네이션 버튼
    // $('.page-nav.mo ul li').click(function(){
    
    //     $('.page-nav.mo ul li').removeClass('on');
    //     $('.page-nav.mo ul li div').removeClass('on');
    //     $('.page-nav.mo ul li p').removeClass('on');
    
    //     //눌렀을때 계속 보이게 하는거
    //     $(this).addClass('on');
    //     $(this).find('div').addClass('on');
    //     $(this).find('p').addClass('on');
    // });
    
    
    
    // video-pop
    $('.pop .list-wrap .box ul li').click(function(){
        $('.video-pop-bg').fadeIn();
    });
    
    $('.video-pop-bg i').click(function(){
        $('.video-pop-bg').fadeOut();
    });


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });


    
});//요기까지 제이쿼리
// window.gameInstance.SendMessage('TangibleCamPosition', 'RemoveObject', 'TangibleCamPosition,Cam4,Canvas,RealVR_BUtton');

function cssbutton(num) {
     gameInstance.SendMessage('MouseWheelMove', 'CSSButton', num);
    //  gameInstance.SendMessage('TangibleCamPosition', 'RemoveGameObject', 'TangibleCamPosition,Cam4,Canvas,3Dasset_Button');
     console.log("버튼클릭");
}

var PageNav = document.getElementsByClassName("pagenav");
var PageNavDiv = document.getElementsByClassName("pagenavdiv");
var PageNavP = document.getElementsByClassName("pagenavp");

//testtestestststset

for(let i=0;i < PageNav.length;i++){
    PageNav[i].classList.remove('on');
    PageNavDiv[i].classList.remove('on');
    PageNavP[i].classList.remove('on');
    console.log("제거하기");
}

function CamPositionToPageNav(x){
        console.log("CamPositionToPageNav : " + x);
        selectPagNav(x);
}

function selectPagNav(num)
{
        console.log("selectPagNav");
        
        for(let i=0;i < PageNav.length;i++)
        {
               if(i == num) 
               { 
                       PageNav[i].classList.add('on');
                       PageNavDiv[i].classList.add('on');
                       PageNavP[i].classList.add('on');

                }
               else 
               {
                       PageNav[i].classList.remove('on');
                       PageNavDiv[i].classList.remove('on');
                       PageNavP[i].classList.remove('on');
               }
        }
        
}


//기존코드

const boxbg = document.getElementsByClassName("conbutton-bg");
var box = document.getElementsByClassName("url2");
//con 버튼
function Asset3DButtonJs(str){ //3D Asset버튼
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        //console.log("Asset3DButtonJs : " + str);
        switch(str)
        {
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        var link = document.location.href; 

        if(link.includes('intangible')){
            var name = Object.keys(VRdata.Intangible[str].Model3D);
            var url = Object.values(VRdata.Intangible[str].Model3D);
            name = name.join('*')
            url = url.join('*')
            gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonName', name);
            gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL', url);
            gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene', 'Model3DViewer');
        }
        // switch(str)
        // {
        //     //무형
        //     case "택견":
        //         var url = "tak/scene.gltf";
        //         gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL',url);
        //         gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene','Model3DViewer');
        //         console.log(url);
        //         break;
        //     //유형
        //     case "6.25":
        //         var url = "jang/scene.gltf";
        //         gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL', url);
        //         gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene', 'Model3DViewer');
        //         break;    
        //     default:
        //         console.log("default");
        //         break;    
        // }
        
    }
}

function VR360ButtonJs(str){ //360VR 버튼
    console.log("VR360ButtonJs : " + str);
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        //console.log("VR360ButtonJs : " + str);
        switch(str)
        {
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        var link = document.location.href; 
 
        if(link.includes('intangible')){
            var name = Object.keys(VRdata.Intangible[str].VRvideo);
            var url = Object.values(VRdata.Intangible[str].VRvideo);
            name = name.join('*')
            url = url.join('*')
            gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonName', name);
            gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL', url);
            gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene', '360Video');
        }
        // 예전코드
        // switch(str)
        // {
        //     case "택견":
        //         var url = "택견.mp4";
        //         gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL',url);
        //         gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene','360Video');
        //         break;
        //     default:
        //         console.log("default");
        //         break;    
        // }
        
    }

}
window.addEventListener("keydown", (e) => {
    Asset3DButtonJs("만구대탁굿")
});
function ThreeFaceVideoJs(str){ //3면 버튼
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        //data 넘길 준비


    //     switch(str)
    //     {
            
    //         case "설악산 꽃자리":
    //             console.log("json 테스트 : " + VRdata.Natural[str].video[0])
    //             var name = Object.keys(VRdata.Natural[str].video);
    //             var url = Object.values(VRdata.Natural[str].video);
    //             name = name.join('*')
    //             url = url.join('*')
    //             console.log(name);
    //             console.dir(url);
    //             break;

    //         case "디지털 병풍":
    //             console.log("json 테스트" + VRdata.Natural[str].video[0].videoname)
    //             break;
    //         default:
    //             box[0].src = "";
    //             break;    
    //     }
    }   
    else
    {
        var link = document.location.href; 
 
        if(link.includes('natrual')){
            var name = Object.keys(VRdata.Natural[str].video);
            var url = Object.values(VRdata.Natural[str].video);
            name = name.join('*')
            url = url.join('*')
            gameInstance.SendMessage('NaturalCamposition', 'ConbuttonName', name);
            gameInstance.SendMessage('NaturalCamposition', 'ConbuttonURL', url);
            gameInstance.SendMessage('NaturalCamposition', 'ConbuttonLoadScene', 'Video');
        }
        else if (link.includes('intangible')){
            var name = Object.keys(VRdata.Intangible[str].video);
            var url = Object.values(VRdata.Intangible[str].video);
            name = name.join('*')
            url = url.join('*')
            gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonName', name);
            gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonURL', url);
            gameInstance.SendMessage('IntangibleCamPosition', 'ConbuttonLoadScene', 'Video');
        }


    }

}


function MediaArtJs(str){//미디어아트 버튼
    console.log("MediaArtJs : " + str);

}

function VideoJs(str){//동영상버튼
    //console.log("thisXRMananger.isInVRSession : " + window.xrManager.isInVRSession);
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        //console.log("VideoJs : " + str);
        switch(str)
        {
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        switch(str)
        {
            //유형
            case "6.25":
                var url = "http://realistic.hscdn.com/front/vrmode/6-25.mp4";//"625video.mp4";
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL',url);
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene','Video');
                break;

            default:
                console.log("default");
                break;    
        }
        
    }

}

function ASMRJs(str){//디지털병풍버튼
    console.log("ASMRJs : " + str);
}

function ARJs(str){//디지털병풍버튼
    console.log("ARUnityJs : " + str);
}
function RealVRJs(str){//디지털병풍버튼
    //console.log("thisXRMananger.isInVRSession : " + window.xrManager.isInVRSession);
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";
        //console.log("RealVRUnityJs : " + str);
        switch(str)
        {
            default:
                box[0].src = "";
                break;    
        }
    }   
    else
    {
        console.log("RealVRUnityJs isImmersive 아님");
        console.log("RealVRUnityJs In VR :" + str);
        switch(str)
        {
            //유형
            case "6.25":
                var url = "http://realistic.hscdn.com/contents/m/0bdd2d6f-d2f9-4336-b7c5-dbbd443d53fa.mp4";//"http://realistic.hscdn.com/front/vrmode/6-25_vr.mp4";//"625360.mp4";
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL', url);
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene', '360Video');
                break;
            default:
                console.log("default");
                break;   
        }
        
    }
}

function closeConButton(){
    boxbg[0].style.display="none";
    box[0].src ="";
    console.log("close")
}



//메뉴버튼
function IntangibleButtonJs(){
    location.href= "intangible.html";
}

function NaturalButtonJs(){
    location.href= "natural.html";

}
function TangibleButtonJs(){
    location.href= "tangible.html";
}
function Menu3DAssetButtonJs(){ //향후 예정
    
}
function Menu360VRButtonJs(){ //향후 예정
    
}
function MainLobbyButtonJs(){
    location.href= "index.html";

}
function SoundButtonJs(){//향후 예정
    
}
function VoiceButtonJs(){//향후 예정
    
}
function CCButtonJs(){//향후 예정
    
}
function VROffButtonJs(){
    console.log("vr off button");
    window.xrManager.toggleVR();
}
function KRButtonJs(){//향후 예정
    
}
function ENButtonJs(){//향후 예정
    
}




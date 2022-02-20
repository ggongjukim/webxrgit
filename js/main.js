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
        }else if(link.includes('tangible')){
            var name = Object.keys(VRdata.Tangible[str].Model3D);
            var url = Object.values(VRdata.Tangible[str].Model3D);
            name = name.join('*')
            url = url.join('*')
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonName', name);
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL', url);
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene', 'Model3DViewer');
        }

        
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

        
    }

}
window.addEventListener("keydown", (e) => {
    console.log(e.key);
    switch(e.key){
        case "1":
            Asset3DButtonJs("6.25");
            break;
        case "2":
            RealVRJs("6.25");
            break;
        case "3":
            VideoJs("6.25");
            break;
        case "4":
            ASMRJs("소대헌");
            break;
        case "5":
            Asset3DButtonJs("소대헌");
            break;
        case "6":
            Asset3DButtonJs("수원화성");
            break; 7
        case "7":
            VideoJs("수원화성");
            break;

        case "8":
            VideoJs("고인돌");
            break;
        case "9":
            Asset3DButtonJs("고인돌");
            break;
        case "a":
            RealVRJs("고인돌고창");
            break;
        case "b":
            RealVRJs("고인돌화순");
            break;

        case "c":
            VideoJs("통도사");
            break;
        case "d":
            RealVRJs("통도사");
            break;
        case "e":
            Asset3DButtonJs("통도사");
            break;

        case "f":
            ThreeFaceVideoJs("공룡화석지");
            break;

        case "g":
            MediaArtJs("한양도성");
            break;
        default:
            break;
    }
});
function ThreeFaceVideoJs(str){ //3면 버튼
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {
        boxbg[0].style.display="flex";

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
        else if (link.includes('tangible')){
            var name = Object.keys(VRdata.Tangible[str].VRvideo);
            var url = Object.values(VRdata.Tangible[str].VRvideo);
            name = name.join('*')
            url = url.join('*')
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonName', name);
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL', url);
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene', '360Video');
        }


    }

}


function MediaArtJs(str){//미디어아트 버튼
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {

    }
    else {
        var link = document.location.href;

        if (link.includes('tangible')) {
            var name = Object.keys(VRdata.Tangible[str].video);
            var url = Object.values(VRdata.Tangible[str].video);
            name = name.join('*')
            url = url.join('*')
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonName', name);
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL', url);
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene', 'Video');
        }

    }

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
        var link = document.location.href;

        if (link.includes('tangible')) {
            var name = Object.keys(VRdata.Tangible[str].video);
            var url = Object.values(VRdata.Tangible[str].video);
            name = name.join('*')
            url = url.join('*')
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonName', name);
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL', url);
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene', 'Video');
        }
        
    }

}

function ASMRJs(str){//디지털병풍버튼
    if(!window.xrManager.isInVRSession)//VR이 아니면
    {

    }
    else {
        var link = document.location.href;

        if (link.includes('tangible')) {
            var name = Object.keys(VRdata.Tangible[str].video);
            var url = Object.values(VRdata.Tangible[str].video);
            name = name.join('*')
            url = url.join('*')
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonName', name);
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL', url);
            gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene', 'Video');
        }

    }
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
    else {
        var link = document.location.href;

        if (link.includes('tangible')) {
            if(VRdata.Tangible[str].VRvideo!=undefined){
                var name = Object.keys(VRdata.Tangible[str].VRvideo);
                var url = Object.values(VRdata.Tangible[str].VRvideo);
                name = name.join('*')
                url = url.join('*')
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonName', name);
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonURL', url);
                gameInstance.SendMessage('TangibleCamPosition', 'ConbuttonLoadScene', '360Video');
            }else{
                console.log("준비된 콘텐츠가 없습니다");
            }

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




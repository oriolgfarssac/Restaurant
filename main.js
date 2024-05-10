const videoControl = () =>{
    let video  = document.getElementById('video');
    let iconoVideo = document.getElementById('img');
    
    if(iconoVideo.src.includes("play.png")){
        video.play();
        iconoVideo.src = "./assets/pause.png";
    }else{
        video.pause();
        iconoVideo.src = "./assets/play.png";
    }
}

const soundControl = () =>{
    let video  = document.getElementById('video');
    let iconoVideo = document.getElementById('img2');
    
    if(iconoVideo.src.includes("volum.png")){
        video.volume = 0;
        iconoVideo.src = "./assets/mute.png";
    }else{
        video.volume = 1;
        iconoVideo.src = "./assets/volum.png";
    }
}

const onScrol = () =>{
    let video  = document.getElementById('video');
    video.play();
    video.volume = 0;
    let iconoVideo = document.getElementById('img');
    iconoVideo.src = "./assets/pause.png";
    let iconVideo2 = document.getElementById('img2');
    iconVideo2.src = "./assets/mute.png";
}

document.addEventListener('scroll', onScrol);
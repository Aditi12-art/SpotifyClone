let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
{songName:"Tu Zaroori sa", filePath:"1.mp3", coverPath:"02 Tu Zaroori - 190kbps.jpeg"},
{songName:"Wafa Ne Bewafai", filePath:"2.mp3", coverPath:"03 Wafa Ne Bewafai - Teraa Surroor (Arijit Singh) 190Kbps.jpg"},
{songName:"Aa Zara Karib", filePath:"3.mp3", coverPath:"Aa Zara - Murder 2 128 Kbps.jpg"},
{songName:"Tere Bina", filePath:"4.mp3", coverPath:"Guru 2007 - Tere Bina.jpg"},
{songName:"Hale Dil", filePath:"5.mp3", coverPath:"Hale Dil - Murder 2 128 Kbps.jpg"},
{songName:"Kya Mujhe Pyar Hai", filePath:"6.mp3", coverPath:"Kya Mujhe Pyar Hai (Woh Lamhe) - K.K - 320Kbps.jpg"},
{songName:"Phir Mohabbat", filePath:"7.mp3", coverPath:"Phir Mohabbat - Murder 2 128 Kbps.jpg"},
{songName:"Saibo", filePath:"8.mp3", coverPath:"SITC-Saibo.jpg"},
{songName:"TereBin", filePath:"9.mp3", coverPath:"TereBin.jpg"},
{songName:"Piya O Re Piya", filePath:"10.mp3", coverPath:"TNPHG-Piya O Re Piya.jpg"},
{songName:"Tum Ho Mera Pyar", filePath:"11.mp3", coverPath:"Tum Ho Mera Pyar (Haunted) - K.K - 320Kbps.jpg"},
{songName:"Maahi", filePath:"12.mp3", coverPath:"Maahi.jpg"}
]
 
songItems.forEach((element,i)=>{
    
   document.getElementsByClassName("songName")[i].innerText=songs[i].songName;
})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
       
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=11){
        songIndex=0;
    }
    else{
songIndex+=1;
    }
    
    audioElement.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
songIndex-=1;
    }
    
    audioElement.src=`${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
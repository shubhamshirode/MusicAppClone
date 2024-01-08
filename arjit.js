console.log("hello");
        
let songIndex = 0;
let audioElement = new Audio('musics\Tum Hi Ho.mp3');
let songItem = Array.from(document.getElementsByClassName("songItems"))

let songs=[
    {songName:"Tum hi Ho" , filePath:"musics\Tum Hi Ho.mp3" },
    {songName:"Kabhi Jo Badal Barse",filePath:"musics\Kabhi Jo Baadal Barse.mp3"},
    {songName:"Tera Yaar Hoon Main",filePath:""},
    {songName:" Milne Hai Mujhse AAyi", filePath:"musics\Milne Hai Mujhse Aayi.mp3"},
    {songName:"Muskrana", filePath:"musics\Muskurane.mp3"},
    {songName:"Agar Tum Saath Ho", filePath:" "},
    {songName:" ", filePath:" "}
]

songItem.forEach((elements,i)=>{
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
}) 
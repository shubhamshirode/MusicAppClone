let buttons = document.querySelectorAll("button");
let currentAudio;
// let pauseSong = document.querySelector(".pause");
// pauseSong.addEventListener("click",(){
//     currentAudio.pause();
// })

for (let val of buttons) {
    val.addEventListener("click", function () {
        // If there is a currently playing audio, pause it
        if (currentAudio) {
            currentAudio.pause();
        }

        let buttonClicked = this.innerHTML;

        switch (buttonClicked) {
            case "Tum Hi Ho": currentAudio = new Audio("musics/Tum Hi Ho.mp3");
                break;
            case "Kabhi Jo Badal Barse": currentAudio = new Audio("musics/Kabhi Jo Baadal Barse.mp3");
                break;
            case "Muskrana": currentAudio = new Audio("musics/Muskurane.mp3");
                break;
            case "Milne Hai Mujhse": currentAudio = new Audio("musics/Milne Hai Mujhse Aayi.mp3");
                break;
        }

        // Play the new audio
        if (currentAudio) {
            currentAudio.play();
        }
    });
}



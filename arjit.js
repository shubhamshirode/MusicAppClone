const sound = document.getElementById("sound");
        const icon = document.getElementById("icon");

        icon.onclick =  function()
        {
            if(sound.paused){
                sound.play();
                icon.src="stop-button.png";
                // If paused then play the
                // music and change the image
            }
            else{
                sound.pause();
                icon.src="im\play_button.png";
            }
        }
        

        
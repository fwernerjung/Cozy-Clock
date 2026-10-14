//------ SETTINGS ------
const settings = document.querySelector('.settings');
const toggleSettingsBtn = document.getElementById("toggleSettingsBtn");
const toggleSecondsIn = document.getElementById("toggleSecondsIn");

let settingsShown = false;
let showSeconds = true;
toggleSecondsIn.checked = true;

toggleSettingsBtn.addEventListener('click', toggleSettings);

function toggleSettings(){
    if (!settingsShown){
        settings.classList.remove("closed");
        settings.classList.add("open");
        settingsShown = true;
    }else if (settingsShown){
        settings.classList.remove("open");
        settings.classList.add("closed");
        settingsShown = false;
    }
}

toggleSecondsIn.addEventListener('change', (event) => {
  if (event.target.checked) {
    showSeconds = true;
  } else {
    showSeconds = false;
  }
});


//------ UHR FUNKTION ------

const hour_clock = document.querySelector('.hour');
const minute_clock = document.querySelector('.minute');
const second_clock = document.querySelector('.second')

const timeInterval = setInterval(function(){
    time()
}, 1000);

function time(){
    let time = new Date();
    
    let hour = time.getHours();
    hour_clock.textContent = hour;

    let minutes = time.getMinutes();
    minute_clock.textContent = minutes;

    if (showSeconds){
        second_clock.style.z_index = "-1";
        let second = time.getSeconds();
        second_clock.textContent = second;
    } else if {
        second_clock.style.z_index = "1";
    }
}
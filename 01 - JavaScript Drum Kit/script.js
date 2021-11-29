//Add event listener to the keys
const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => {
    key.addEventListener('transitionend', removeSound)
});

window.addEventListener('keydown', startTransition)


function removeSound(e){
    e.target.classList.remove('playing');
}

function startTransition(e){
    //Check the button clicked
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)


    //Change class to start transition
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    
}
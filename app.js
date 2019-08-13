//data-key (data attributes)
//play sound function does all the functionality of keydown
function playSound(e) {

    //-------------------test------------------------------
    //e is an event when any key is pressed on the keyboard
    //e is an object full of data
    //ex. a key is keyCode: 65
    //console.log(e);
    //console.log(e.keyCode);

    //-------------------Grab element-----------------------
    //Grab audio element
    //grab data-key which is an attribute selector
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //See if we've selected an audio element
    //console.log(audio);

    //-------------------Add FX to key-----------------------
    //grab key class element
    //selects each keycode associated with the class
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //check selected key class is working when pressed
    //console.log(key);

    //-------------------Function---------------------------
    //check to see if there are any audio element with data-key attr.
    if (!audio) {
        return; //stops the function from running all together
    }
    //press the key multiple times
    //while audio is still playing, press the key so it rewinds back to start
    audio.currentTime = 0; //rewinds to start
    //since we have audio element, we can play it.
    audio.play();

    //-------------------Will add CSS FX---------------------
    //In css, adds class 'playing' with class playing sytle
    //same as key.addClass('playing') in jquery
    key.classList.add('playing');
}


//-------------------Transition End Event---------------------
//listen on each key when the transition end event happens inside css

//create a function removeTranstion 
function removeTransition(e) {
    //console.log(e);
    //transform only selected property
    //e.propertyName is select for all the transition 

    if (e.propertyName !== 'transform') return; //skips if not a transform
    console.log(e.propertyName);
    //this
    console.log(this);
    //this is equal to what gets called against it..
    //for this example, addEventListener got called and key is against it. 
    //this = key
    this.classList.remove('playing');

}
//Select all of classes with key 
const keys = document.querySelectorAll('.key');
//loop through each key in keys class
keys.forEach(key => {
    //add an eventlistener with in CSS is transition and pass function removeTranstion
    //which will loop for propertyName object
    key.addEventListener('transitionend', removeTransition);
});

//listening for a key-up event and call playSound function
window.addEventListener('keydown', playSound);


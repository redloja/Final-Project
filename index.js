//Project curtosy of tutorial from Dave Ed on YouTube: https://www.youtube.com/watch?v=bfaPnlYE8Jo 

const moonPath = 
"M166,334.000272 C74.3207315,334.000272 0,259.679268 0,168 C0,76.3207315 106.21875,-11.4863281 166,2 C167.110911,2.2506156 170.053134,2.33504854 169.098371,2.33504854 C167.118223,2.33504854 84.6908878,79.8924855 84.6908878,168 C84.6908878,258.523029 169.381776,334.000272 169.381776,333.964651 C169.381776,331.924333 167.156239,334.000272 166,334.000272 Z"

const sunPath = 
"M0,165.999612 C0,74.3205219 74.3208608,0 166,0 C257.679268,0 332,74.3207315 332,166 C332,257.671528 257.691818,331.98745 166.023222,332.000272 C166.015434,332.000272 166.007693,332.000272 166,332.000272 C74.3207315,332.000272 0,257.679268 0,166 L0,165.999612 Z"


const darkMode =  document.querySelector("#darkMode");
//Switch between true and false
let toggle = false;

//Ability to click on the sun
darkMode.addEventListener('click', () => {

// Here we set up the Timeline
const timeline = anime.timeline({
    duration : 750,
    easing : "easeOutExpo"
    });

//add Different animations to the timeline
//if the toggle value is true, then do the sun path, if it's not true, then do the moonPath
timeline.add ({
         targets: ".sun",
         d: [{value: toggle ? sunPath : moonPath }]
    })
    .add({
        targets: "#darkMode",
        rotate: 320, 
    }, 
    "-= 350"
    )
    //when the toggle is true, the white color is going to run, if false, the rak color will run
    //color changes toggles between light and dark text
    .add({
        targets: "section",
        backgroundColor: toggle ? "rgb(255, 255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"

    },
    "-= 700"
    );

//to get the sun to swith between night and day
//Not false is going to be tru: if it's not toggle, then the else statement will run.
if(!toggle){
    toggle = true;
}
else{
    toggle = false;
}

});
        
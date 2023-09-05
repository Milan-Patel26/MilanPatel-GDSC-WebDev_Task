var mode_switch = document.querySelector('.mode-switch');
var all_button = document.querySelector('.all-button');
var sessions_button = document.querySelector('.sessions-button');
var events_button = document.querySelector('.events-button');

// mode_switch.addEventListener('click', ()=> {
//     if(document.getElementById('mode').className == 'light-mode'){
//         document.getElementById('mode').className = 'dark-mode'
//     }
//     else{
//         document.getElementById('mode').className = 'light-mode'
//     }
// })

all_button.addEventListener("click", ()=>{
    for(var i = 1; i <= 8; i++){
        var element = document.querySelector('.sd'+i);
        element.classList.remove('hidden');
    }
})

sessions_button.addEventListener("click", ()=>{
    for(var i = 1; i <= 8; i++){
        if(i == 1 || i == 6 || i == 7){
            var element = document.querySelector('.sd'+i);
            element.classList.remove('hidden');
            continue;
        }
        var element = document.querySelector('.sd'+i);
        element.classList.add('hidden');
    }
})

events_button.addEventListener("click", ()=>{
    for(var i = 1; i <= 8; i++){
        if(i == 2 || i == 3 || i == 4 || i == 5 || i == 8){
            var element = document.querySelector('.sd'+i);
            element.classList.remove('hidden');
            continue;
        }
        var element = document.querySelector('.sd'+i);
        element.classList.add('hidden');
    }
})
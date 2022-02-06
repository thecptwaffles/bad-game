var Steve = document.getElementById('Steve');
var block = document.getElementById('block');

function jump(){
    if(Steve.classList !='animate'){
        Steve.classList.add('animate');
    }
    Steve.classList.add('animate');
    setTimeout(function(){
        Steve.classList.remove('animate');
    },500)
}

var checkDead = setInterval(function(){
    var steveTop = parseInt(window.getComputedStyle(Steve).getPropertyValue('top'));

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if(blockLeft<20 && blockLeft>0 && steveTop >= 130) {
        alert('You Lose. Better luck next time.')
    }
},10)
var Steve = document.getElementById('Steve');
var block = document.getElementById('block');
var jump = new Audio('jump.wav')

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

    if(blockLeft<20 && blockLeft>0 && steveTop >= 550 ) {
        block.style.animation = 'none';
        block.style.display = 'none';
        if(alert('You Lose :(')){}
else    window.location.reload(); 
    }
},10)
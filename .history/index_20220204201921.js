var Steve = document.getElementById('Steve');
var block = document.getElementById('block');

function jump(){
    Steve.classList.add('animate');
    setTimeout(function(){
        Steve.classList.remove('animate');
    },500)
}
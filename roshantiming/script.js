   // RANDOM TIME
   function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);} 
var a = randomNumber(10, 51); 
var b = randomNumber(0, 60);
    if (b <= 9) {
        b = '0' + b;}
var response = a + ':' + b;
document.getElementById('random-timer').innerHTML = response;

// AEGIS TIMER
var aegis_a = a + 5 + '' + b;
var int_min_rosh = a + 8 + '' + b;
var int_max_rosh = a + 11 + '' + b;
var d = aegis_a + ' ' + int_min_rosh + '-' + int_max_rosh

//Check
function TimerCheck(){
    var timer = "";
    var result = document.getElementById("searchTxt").value;
    if (d == result){
        timer="Nice 😊";
        document.getElementById('end1').innerHTML = '<span style="color:green; position:relative; top:-370px;  class = "slow-show red"">' + timer + '</span>';
        window.setTimeout(function(){location.reload()},1000) //refresh page
           
    }
    else {
        timer="Incorrect ❌:  " + d;
        document.getElementById('end1').innerHTML = '<span style="color:red;" class = "slow-show red">' + timer + '</span>';   
    }
    
    
}

//Enter
var input = document.getElementById("searchTxt");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
}
});

//Image
function getImage() {
const random = Math.floor(a / 5); 
    if (random % 2 == 0){
        return '<img src="./static/0.png" border="0" />';
    }
    else{
        return '<img src="./static/1.png" border="0" />';
    }
    
}
document.getElementById("imaaaga").innerHTML = getImage();

// Dont show link github
const imgProfile = document.querySelector('#img-profile');
const openUrl = (url) => {
window.open(url, '_blank');
};
imgProfile.addEventListener('click', () => {
openUrl('https://github.com/dankYoff');
});

//Preloader
let mask = document.querySelector('.mask');

window.addEventListener('load',() => {  
    mask.classList.add('hide');
    setTimeout(()=>{
        mask.remove();
    }, 1500);
});

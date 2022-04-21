const logoCanSwitch = document.querySelector('.logo');
const navList = document.getElementById('navigation-bar');
logoCanSwitch.addEventListener('click',()=>{
    document.body.classList.toggle("dark")
});

//moving button
const menuBtn = document.querySelector('.menu-btn');
let menuOpen= false;
menuBtn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
    toggleButton();
});

//show menu
function toggleButton(){
    navList.classList.toggle('show')
}



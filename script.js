const sun = document.getElementsByClassName("mode")[0]
const moon = document.getElementsByClassName("mode")[1]
const modeElems=document.querySelectorAll(".mode");
var r = document.querySelector(':root');

modeElems.forEach(mode => {
        mode.addEventListener("click",(e)=>{

            
           

            sun.classList.toggle("hide")
            moon.classList.toggle("hide")
            if(e.target.classList.contains("fa-sun")){
                r.style.setProperty('--bg', '#ffffff');
                r.style.setProperty('--color', '#242424');
            }
            if(e.target.classList.contains("fa-moon")){
                r.style.setProperty('--color', '#ffffff');
                r.style.setProperty('--bg', '#242424');
            }
      
        })
});

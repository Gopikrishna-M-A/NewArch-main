const sun = document.getElementsByClassName("mode")[0]
const moon = document.getElementsByClassName("mode")[1]
const modeElems=document.querySelectorAll(".mode");
const mainImage = document.getElementById("mainImg")
const serviceImg1 =document.getElementById("service-img-1")
const serviceImg2 =document.getElementById("service-img-2")
const serviceImg3 =document.getElementById("service-img-3")
const teamImg =document.getElementById("team-img")

var r = document.querySelector(':root');

modeElems.forEach(mode => {
        mode.addEventListener("click",(e)=>{

            
           

            sun.classList.toggle("hide")
            moon.classList.toggle("hide")
            if(e.target.classList.contains("fa-sun")){
                r.style.setProperty('--bg', '#ffffff');
                r.style.setProperty('--color', '#171717');
                mainImage.src = "images/light m.png"
                serviceImg1.src = "images/c1.jpg"
                serviceImg2.src = "images/c2.jpg"
                serviceImg3.src = "images/c3.jpg"
                teamImg.src = "images/team.jpg"
                
            }
            if(e.target.classList.contains("fa-moon")){
                r.style.setProperty('--color', '#ffffff');
                r.style.setProperty('--bg', '#171717');
                mainImage.src = "images/dark m.jpg"
                serviceImg1.src = "images/s1.png"
                serviceImg2.src = "images/s2.png"
                serviceImg3.src = "images/s3.png"
                teamImg.src = "images/o1.png"
            }
      
        })
});




    // video player settings


        let clip = document.getElementById("videoplayer")

        clip.addEventListener("mouseover", function (e) {
            clip.play();
        })
  
        clip.addEventListener("mouseout", function (e) {
            clip.pause();
        })

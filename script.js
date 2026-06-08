emailjs.init("YB0DrAO-uH-HYI59W")

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=
(Math.random()*6+5)+"s";

document.querySelector(".hearts")
.appendChild(heart);

}

yesBtn.addEventListener("click",()=>{

emailjs.send(
"SERVICE_hulleql",
"TEMPLATE_177z0x5",
{
message:"YES ❤️ Leruo clicked YES!"
}
)

.then(()=>{

document.getElementById("popup").style.display="block";

});

});

function closePopup(){

document.getElementById("popup").style.display="none";

}

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*500-250;

const y=Math.random()*300-150;

noBtn.style.transform=
`translate(${x}px,${y}px)`;

});

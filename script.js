
let essai;
let min;
let max;
let cible;
function remaining(message){

  document.getElementById("ch").innerHTML = "Il vous reste " + message + " chances";
  
}

function generateNb(max,min){
  parseInt(cible = Math.floor(Math.random() * (max - min) + min));
  console.log("nombre géneré " + cible);
}

function setting(){
   min = parseInt(document.getElementsByName("min")[0].value);
  console.log("min " + min);

  max = parseInt(document.getElementsByName("max")[0].value);
  console.log("max " + max);
  parseInt(essai=document.getElementsByName("essai")[0].value);
  

generateNb(max,min,essai);
}

function check() {

  let player = document.getElementById("in").value;

  if (player && min && max) {
    if (essai > 0) {
      if (player < cible) {
        document.getElementById("ph").innerHTML = "Plus grand";
        essai--;
        remaining(essai);
        console.log("cc")
      }

      if (player > cible) {
        document.getElementById("ph").innerHTML = "Plus petit";
        essai--;
        remaining(essai);
        console.log("cc")
      }

      if (player === cible) {
        document.getElementById("ph").innerHTML = "bien joué!";
        console.log("cc")
      }

      if (essai === 0) {
        document.getElementById("ch").innerHTML = "Perdu!";
        console.log("cc")
      }

      if (player < min || player > max){
         alert("Valeur impossible");
         console.log(player);
         console.log(min)
         console.log(max);
         
      }
    }
  }else{
     alert("veuillez entrer 4 valeurs");
      console.log("cc")
  }
}

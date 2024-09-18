const Firstinput = document.querySelector("#first-h2 input");
const Secondinput = document.querySelector("#second-h2 input");
const h3 = document.querySelector("#h3")
console.log(h3, Secondinput)

const isFullDark = JSON.parse(localStorage.getItem('Firstinput'));
const ish3 = JSON.parse(localStorage.getItem('Secondinput'));

if(isFullDark){
  Firstinput.checked = true;
}
if(ish3){
  Secondinput.checked = true
}
changefull();
change();



Firstinput.addEventListener("change", () => {
  changefull();
  change();
})
function changefull  (){
  if (Firstinput.checked) {
    document.body.classList.add("dark")
    localStorage.setItem('firstinput',true)

  }
  else {
    document.body.classList.remove("dark")
    localStorage.setItem('firstinput',false)

  }
  Secondinput.checked = Firstinput.checked

}


function change() {
  if (Secondinput.checked) {
    h3.style.backgroundColor = "black"
    h3.style.color = "white"
    localStorage.setItem('Secondinput',true)
  }
  else {
    h3.style.backgroundColor = "white"
    h3.style.color = "black"
    localStorage.setItem('Secondinput',false)
  }

}
Secondinput.addEventListener("click", change)


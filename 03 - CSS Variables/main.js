const inputs = document.querySelectorAll(".controls input")
inputs.forEach(input => {
    input.addEventListener('change', changeEvent)
})

const root = document.documentElement;

function changeEvent(){
   let sizing = this.dataset.sizing;
   if (sizing == undefined) sizing = ''
   console.log(sizing)
   root.style.setProperty('--'+this.id, this.value+sizing)
}
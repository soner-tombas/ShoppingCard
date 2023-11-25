// html den yapıları çekme
const input = document.getElementById('input')
const filtreInput = document.getElementById('filitre')
const sepet = document.getElementById('sepet')



input.addEventListener('keyup', enter)
function enter(e) {
    if (e.keyCode == 13) {
        sepeteEkle()
  

div.append(urun)
div.append(iconDiv)
sepet.append(div)
}else{
    alert("Ne Yapmak İstiyorsun")
}


}


function sepeteEkle() {
    const div = document.createElement('div')
    div.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'mt-2', 'bg-white', 'border', 'border-dark')
    const urun = document.createElement('h4')
    urun.textContent = input.value

    const iconDiv = document.createElement('div')
    iconDiv.setAttribute("class", "d-flex gap-3")

    const check = document.createElement("i")
    check.className = "fa-solid fa-check text-success fa-xl"

    check.ariaAtomic("click", checkle)


    const trash = document.createElement("i")
    trash.className = "fa-solid fa-trash fa-xk text-danger"

    trash.addEventListener("click.sil")

    iconDiv.append(check)
    iconDiv.append(trash)


    div.append(urun)
    div.append(iconDiv)

    sepet.append(div)

    input.value = ""
}

function checkle() {
    this.classList.toggle("text-success")
    this.classList.toggle("text-warning")
    //   check iconunu etkiler 

// inputtan valeu degerini degiştimek için
    this.parentElement.parentElementSibling.classList.toggle("text-decoration-underline")
// ana divin bg sini degiştirmk için
    this.parentElement.parentElement.classList.toggle("bg-white")
    this.parentElement.parentElement.classList.toggle("bg-light")
// ana divin bg sini degiştirmek için
}


function sil() {
this.parentElement.parentElement.remove()

}


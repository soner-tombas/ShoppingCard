//! html'den yapıları çekme
const input = document.getElementById('input')
const filtreInput = document.getElementById('filtre')
const sepet = document.getElementById('sepet')

let urunler = []

// console.log(Boolean(getItemFromLocalStorage()))
if (getItemFromLocalStorage()) {
    urunler = getItemFromLocalStorage()

    console.log(urunler)
}

input.addEventListener('keyup', enter)


function enter(e) {
    if (e.keyCode == 13) {
        sepeteEkle()
    }
}


function sepeteEkle() {
    const div = document.createElement('div')
    div.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'mt-2', 'bg-white', 'border', 'border-dark', 'p-4', 'rounded-2')

    const urun = document.createElement('h4')
    urun.textContent = input.value

    const iconDiv = document.createElement('div')
    iconDiv.setAttribute('class', 'd-flex gap-3')

    const check = document.createElement('i')
    check.className = "fa-solid fa-check text-success fa-xl"

    check.addEventListener('click', checkle)

    const trash = document.createElement('i')
    trash.className = "fa-solid fa-trash fa-xl text-danger"

    trash.addEventListener('click', sil)

    if (input.value.trim() != '') {
        iconDiv.append(check)
        iconDiv.append(trash)

        div.append(urun)
        div.append(iconDiv)

        sepet.append(div)

        addToLocalStorage()

    } else {
        alert('Hayırdır Dostum!! Ne Yapmaya Çalışıyorsun..')
    }

    input.value = ""
}


function checkle() {
    //? check iconunu etkiler
    this.classList.toggle('text-success')
    this.classList.toggle('text-warning')
    //? check iconunu etkiler

    //! inputtan gelen value değerini değiştirmek için
    this.parentElement.previousElementSibling.classList.toggle('text-decoration-underline')
    //! inputtan gelen value değerini değiştirmek için

    //* ana divin bg'sini değiştirmek için
    this.parentElement.parentElement.classList.toggle('bg-white')
    this.parentElement.parentElement.classList.toggle('bg-light')
    //* ana divin bg'sini değiştirmek için

}

function sil() {
    // this.parentElement.parentElement.remove(

    removeFromLocalStorage()
}


function addToLocalStorage() {
    let urun = input.value.trim()

    urunler.push(urun)

    console.log(urunler)
    localStorage.setItem('urunler', JSON.stringify(urunler))
}


function getItemFromLocalStorage() {
    let localItem = localStorage.getItem('urunler')
    return JSON.parse(localItem)
}


function removeFromLocalStorage() {
    // let urun = input.value

    // urunler.forEach(element => {
    //     console.log(element.indexOf(urun))
    // })

    // console.log(urunler.indexOf(urun))

}

// localStorage.clear()
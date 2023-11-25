//! html'den yapıları çekme
const input = document.getElementById('input')
const filtreInput = document.getElementById('filtre')
const sepet = document.getElementById('sepet')

let urunler = []

// console.log(Boolean(getItemFromLocalStorage()))
if (getItemFromLocalStorage()) {
    urunler = getItemFromLocalStorage()

    console.log(urunler)
    localStorageUrunleri()
}

input.addEventListener('keyup', enter)
filtreInput.addEventListener('input', filtreleme)


function enter(e) {
    if (e.keyCode == 13) {
        sepeteEkle()
    }
}

function filtreleme(element) {
    // console.log(element.target.value.toLowerCase())
    const SepetUrunleri = document.querySelectorAll('.sepetUrunu')
    // console.log(SepetUrunleri)

    let kullaniciDeger = element.target.value.toLowerCase()

    SepetUrunleri.forEach(sepetUrunu => {
        // console.log(sepetUrunu.firstChild.textContent.toLowerCase())
        let urunAdi = sepetUrunu.firstChild.firstChild.textContent.toLowerCase()

        // console.log(urunAdi.indexOf(kullaniciDeger))
        if (urunAdi.indexOf(kullaniciDeger) !== -1) {
            sepetUrunu.style.display = 'block'
        } else {
            sepetUrunu.style.display = 'none'
        }
    })


}


// console.log(!isChecked)
let isChecked = false

function sepeteEkle() {

    const anaDiv = document.createElement('div')
    anaDiv.className = 'sepetUrunu w-100'

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

        anaDiv.append(div)

        sepet.append(anaDiv)

        addToLocalStorage()

    } else {
        alert('Hayırdır Dostum!! Ne Yapmaya Çalışıyorsun..')
    }

    input.value = ""
}

function localStorageUrunleri() {

    urunler.forEach(urun => {
        const anaDiv = document.createElement('div')
        anaDiv.className = 'sepetUrunu w-100'

        const div = document.createElement('div')
        div.classList.add('d-flex', 'align-items-center', 'justify-content-between', 'mt-2', 'bg-white', 'border', 'border-dark', 'p-4', 'rounded-2')

        const urunAdi = document.createElement('h4')
        urunAdi.textContent = urun.name

        const iconDiv = document.createElement('div')
        iconDiv.setAttribute('class', 'd-flex gap-3')

        const check = document.createElement('i')
        check.className = "fa-solid fa-check text-success fa-xl"

        check.addEventListener('click', checkle)

        const trash = document.createElement('i')
        trash.className = "fa-solid fa-trash fa-xl text-danger"

        trash.addEventListener('click', sil)

        isCheckedMi(urun, check, urunAdi, div)

        iconDiv.append(check)
        iconDiv.append(trash)

        div.append(urunAdi)
        div.append(iconDiv)

        anaDiv.append(div)

        sepet.append(anaDiv)


    })

}


function isCheckedMi(urun, check, urunAdi, div) {
    if (urun.isChecked === true) {

        //? check iconunu etkiler
        check.classList.toggle('text-success')
        check.classList.toggle('text-warning')
        //? check iconunu etkiler

        //! inputtan gelen value değerini değiştirmek için
        urunAdi.classList.toggle('text-decoration-underline')
        //! inputtan gelen value değerini değiştirmek için

        //* ana divin bg'sini değiştirmek için
        div.classList.toggle('bg-white')
        div.classList.toggle('bg-light')
        //* ana divin bg'sini değiştirmek için
    }
}



function checkle() {
    let itemName = this.parentElement.previousElementSibling.textContent
    //! isChecked i güncelleme
    urunler.forEach(urun => {
        if (urun.name == itemName) {

            urun.isChecked = !urun.isChecked

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

            updateCheckedLocal(urun.name, urun.isChecked)
        }
    })
}

function sil() {
    this.parentElement.parentElement.remove()

    let urun = this.parentElement.previousElementSibling.textContent

    removeFromLocalStorage(urun)
}


function addToLocalStorage() {
    let urun = {
        'name': input.value.trim(),
        'isChecked': isChecked
    }
    // let urun = input.value.trim()
    // console.log(urun)
    urunler.push(urun)

    console.log(urunler)
    localStorage.setItem('urunler', JSON.stringify(urunler))
}


function getItemFromLocalStorage() {
    let localItem = localStorage.getItem('urunler')
    return JSON.parse(localItem)
}


function removeFromLocalStorage(urun) {
    // console.log(urunler.indexOf(urun))
    let urunIndex = urunler.indexOf(urun)

    urunler.splice(urunIndex, 1)

    localStorage.setItem('urunler', JSON.stringify(urunler))
}

// localStorage.clear()

function updateCheckedLocal(itemName, isChecked) {


    urunler.map(urun => {
        // console.log(urun.name == itemName)
        if (urun.name == itemName) {
            urun.isChecked = isChecked
        }
    })

    console.log(urunler)

    localStorage.setItem('urunler', JSON.stringify(urunler))

}
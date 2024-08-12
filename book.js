


//booking page

const slides = document.querySelectorAll(".heroimg2")
var counter=0

slides.forEach(
    (heroimg2, index) => {
        heroimg2.style.left = `${index*100}%`
    }
)



const goPrev = () => {
    counter--
    slideImage()
}

const goNext = () => {
    counter++
    slideImage()
}


const slideImage=()=>{
    slides.forEach(
        (heroimg2) => {
            heroimg2.style.transform = `translateX(-${counter * 100}%)`
        }
    ) 
}
const images = document.querySelectorAll(".bgphoto")

function preload(img){
    const src = img.getAttribute(".bgphoto")
    if(!src){
        return;
    }
    img.src = src
}

const imgOptions ={}
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            preload(entry.target)
            imgObserver.unobserve(entry.target)
        }
    })
},imgOptions)

images.forEach(image => {
    imgObserver.observe(image)
})

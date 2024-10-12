const mainImages = document.querySelectorAll(".default .main-img img")
const thumbnails = document.querySelectorAll(".default .thumbnail-images div")


const lightboxThumbnails = document.querySelectorAll(".lightbox .gallery .thumbnail-images div");
const lightboxImages = document.querySelectorAll(".lightbox .main-img img");
const close = document.querySelector(".close");
const lightbox = document.querySelector(".lightbox");
const prevIcon = document.querySelector(".prev-icon");
const nextIcon = document.querySelector(".next-icon");

console.log(prevIcon,nextIcon)


let currentIndex = 0;


function displayImage(index,thumbnails,mainImages){
    thumbnails.forEach(thumbnail =>{
        thumbnail.classList.remove("active");
    })
    mainImages.forEach(img =>{
        img.classList.remove("active");
    })

    thumbnails[index].classList.add("active");
    mainImages[index].classList.add("active");
}



thumbnails.forEach((thumbnail,index)=>{
    thumbnail.addEventListener("click",()=>{
        displayImage(index, thumbnails,mainImages)
    })
})

lightboxThumbnails.forEach((thumbnail,index)=>{
    thumbnail.addEventListener("click",()=>{
        currentIndex = index;
        displayImage(currentIndex, lightboxThumbnails, lightboxImages)
    })
})


 mainImages.forEach((img,index) => {
     img.addEventListener("click",()=>{
          lightbox.classList.add("active");
          currentIndex = index;
          displayImage(currentIndex, lightboxThumbnails, lightboxImages)
     })
 })


close.addEventListener("click",()=>{
   lightbox.classList.remove("active")
})

prevIcon.addEventListener("click",()=>{
    if(currentIndex <= 0){
        currentIndex = lightboxImages.length -1 ;
    }else{
        currentIndex--
    }
    console.log(currentIndex)
    
     displayImage(currentIndex, lightboxThumbnails, lightboxImages)
})
nextIcon.addEventListener("click",()=>{
    if(currentIndex >= lightboxImages.length - 1){
        currentIndex = 0;
    }else{

        currentIndex++;
    }
    console.log(currentIndex)
     displayImage(currentIndex, lightboxThumbnails, lightboxImages)
})
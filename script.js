let instagramAddress = "https://www.instagram.com/gokayybaz/"
let youtubeAddress = "https://www.youtube.com/channel/UCCaPG_zIeu_cxVdK0CUrmZw"
let linkedInAddress = "https://www.linkedin.com/in/g%C3%B6kay-baz-233527250/"
let twitterAddress = "https://twitter.com/gokayybaz1"
let githubAddress = "https://github.com/gokayybaz"

let instagramButton = document.getElementById("btn-instagram")
let youtubeButton = document.getElementById("btn-youtube")
let linkedInButton = document.getElementById("btn-linkedIn")
let twitterButton = document.getElementById("btn-twitter")
let githubButton = document.getElementById("btn-github")

instagramButton.addEventListener("click",()=> {
    open(instagramAddress, "_blank")
})

youtubeButton.addEventListener("click",()=> {
    open(youtubeAddress, "_blank")
})

linkedInButton.addEventListener("click",()=> {
    open(linkedInAddress, "_blank")
})

twitterButton.addEventListener("click",()=> {
    open(twitterAddress, "_blank")
})

githubButton.addEventListener("click",()=> {
    open(githubAddress, "_blank")
})

let mobileNavShowButton = document.getElementById("btn-mobile-nav")
let mobileNavArea = document.getElementById("mobile-nav")
let mobileNavButtons = document.getElementsByClassName("nav--button")
let mainBodyArea = document.getElementById("main-body")
mainBodyArea.addEventListener("click",()=>{
    mobileNavArea.style.display = "none"

})


mobileNavShowButton.addEventListener("click",()=> {
    mobileNavArea.style.display = "flex"
})

for (let index = 0; index < mobileNavButtons.length; index++) {
    let navButton = mobileNavButtons[index]
    navButton.addEventListener("click",()=>{
        mobileNavArea.style.display = "none"
    })
    
}

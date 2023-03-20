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
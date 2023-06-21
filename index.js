const homeAddOne = document.getElementById("h-1point")
const homeAddTwo = document.getElementById("h-2point")
const homeAddThree = document.getElementById("h-3point")
const guestAddOne = document.getElementById("g-1point")
const guestAddTwo = document.getElementById("g-2point")
const guestAddThree = document.getElementById("g-3point")
const homeScore = document.getElementById("homeScore")
const guestScore = document.getElementById("guestScore")
const resetScores = document.getElementById("resetScores")

homeAddOne.addEventListener("click", ()=>{
    homeScore.textContent = parseInt(homeScore.textContent) + 1
})
homeAddTwo.addEventListener("click", ()=>{
    homeScore.textContent = parseInt(homeScore.textContent) + 2
})
homeAddThree.addEventListener("click", ()=>{
    homeScore.textContent = parseInt(homeScore.textContent) + 3
})
guestAddOne.addEventListener("click", ()=>{
    guestScore.textContent = parseInt(guestScore.textContent) + 1
})
guestAddTwo.addEventListener("click", ()=>{
    guestScore.textContent = parseInt(guestScore.textContent) + 2
})
guestAddThree.addEventListener("click", ()=>{
    guestScore.textContent = parseInt(guestScore.textContent) + 3
})

resetScores.addEventListener("click", ()=>{
    guestScore.textContent= 0
    homeScore.textContent= 0
})


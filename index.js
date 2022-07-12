let gameSum1 = document.getElementById("score1")
let result1 = 0

function add1PointHomeTeam(){
    result1 += 1
    gameSum1.textContent = result1
}

function add2PointsHomeTeam(){
    result1 += 2
    gameSum1.textContent = result1
}

function add3PointsHomeTeam(){
    result1 += 3
    gameSum1.textContent = result1
}

let gameSum2 = document.getElementById("score2")
let result2 = 0

function add1PointGuestTeam(){
    result2 += 1
    gameSum2.textContent = result2
}

function add2PointsGuestTeam(){
    result2 += 2
    gameSum2.textContent = result2
}

function add3PointsGuestTeam(){
    result2 += 3
    gameSum2.textContent = result2
}
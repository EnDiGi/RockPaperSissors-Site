
let turns = 0;

let wins = 0;
let losses = 0;
let ties = 0;

let winRate = 33;
let loseRate = 33;
let tieRate = 34;

const moves = ["rock", "paper", "scissors"];

function getPercentage(total, fraction){
	if (fraction === 0){
		return 0
	}
	return Math.round(100 / total * fraction)
}

function play(playerMove){
	turns++;

	comMove = moves[Math.floor(Math.random() * 3)];

	document.getElementById("playerMove").textContent = `Player move: ${playerMove[0].toUpperCase() + playerMove.slice(1)}`
	document.getElementById("comMove").textContent = `COM move: ${comMove[0].toUpperCase() + comMove.slice(1)}`

	if (playerMove === "rock" && comMove === "scissors" ||
		playerMove === "paper" && comMove === "rock" || 
		playerMove === "scissors" && comMove === "paper"){
			document.getElementById("resultText").textContent = "You won!";
			document.getElementById("resultText").style.color = "green";
			wins++;
		}
	else if (playerMove===comMove){
		document.getElementById("resultText").textContent = "It's a tie!";
		document.getElementById("resultText").style.color = "black";
		ties++;
	}
	else{
		document.getElementById("resultText").textContent = "You lost...";
		document.getElementById("resultText").style.color = "red";
		losses++;
	}

	winRate = getPercentage(turns, wins)
	loseRate = getPercentage(turns, losses)
	tieRate = getPercentage(turns, ties)

	if(winRate + loseRate + tieRate > 100){
		tieRate--;
	}else if(winRate + loseRate + tieRate < 100){
		tieRate++;
	}

	document.getElementById("winsC").textContent = `${wins} (${winRate}%)`;
	document.getElementById("tiesC").textContent = `${ties} (${tieRate}%)`;
	document.getElementById("loseC").textContent = `${losses} (${loseRate}%)`;
}
var scores, roundScore, activePlayer, gamePlaying;
init()

document.querySelector(".btn-roll").addEventListener('click', function () {
    if(gamePlaying){
        var dice = Math.floor(Math.random()*6) + 1; //Random Number
        var diceDOM = document.querySelector(".dice"); //Displaying Result
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice +'.png';
        //Updating Round Score
        if(dice !==1){
        //add Score
        roundScore += dice;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
        }
        else {
        nextplayer();
        }
        //document.getElementById("current-" + activePlayer).textContent = dice;
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //add current score to global score
        scores[activePlayer] += roundScore;
        //update in the ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //check if player won the game
        if(scores[activePlayer] >= 100){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else{
            nextplayer();
        }
    }

})

function nextplayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
     roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init)

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}

function open_rules(){
    document.getElementById('g-rules').style.height = '100%'
}

function close_rules(){
    document.getElementById('g-rules').style.height = '0%'
}


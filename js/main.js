function generateMatch() {
    let numbers = Array.from(Array(30).keys());
    numbers.sort(() => Math.random() - 0.5);
  
    let match = [];
    for (let i = 0; i < 30; i += 2) {
      match.push([numbers[i], numbers[i + 1]]);
    }
  
    return match;
}

function generateRandomCoeficients(min, max) {
    return Math.random() * (max - min) + min;
} 

function generateCoeficients() {
    let coeficients = [];
    for (let i = 0; i < 3; i++) {
      let coeficient = generateRandomCoeficients(1.5, 5);
      coeficients.push(coeficient.toFixed(2));
    }
    return coeficients;
}

let match = generateMatch();
console.log(match);




const teamFirst=document.getElementById('team-first');
const teamSecond=document.getElementById('team-second');
const Match=document.getElementById('match');
// const teamA=document.getElementById('teamA');
// const teamB=document.getElementById('teamB');
const path='./img/'
const teamArray=[
    'belge', 'black', 'blue', 'brown', 'cherry',
    'coral', 'darkblue', 'darkgreen', 'gold', 'gray',
    'green', 'indigo', 'lavender', 'lightblue', 'lightgray',
    'lightgreen', 'magenta', 'mint', 'olive', 'orange',
    'pink', 'purple', 'red', 'salomon', 'skyblue',
    'tan', 'turquoise', 'white', 'yellow', 'darkgray'
]

for (let index = 0; index < 7; index++) {
    let coeficients = generateCoeficients();
    const TeamBox=document.createElement('div');
    const Team_1=document.createElement('div');
    const MatchCoef=document.createElement('div');
    const Suggestions=document.createElement('div');
    const playGame=document.createElement('button');
    const startMatch=document.createElement('p');
    MatchCoef.appendChild(Suggestions);
    playGame.setAttribute('id', index);
    startMatch.setAttribute('id',index);
    playGame.textContent='BET'
    MatchCoef.appendChild(playGame);
    MatchCoef.appendChild(startMatch);
    const firstBidding=document.createElement('div');
    const drawBidding=document.createElement('div');
    const secondBidding=document.createElement('div');
    Suggestions.setAttribute('class','suggestions');
    Suggestions.appendChild(firstBidding);
    Suggestions.appendChild(drawBidding);
    Suggestions.appendChild(secondBidding);
    const frist=document.createElement('span');
    const draw=document.createElement('span');
    const second=document.createElement('span');
    firstBidding.setAttribute("id", teamArray[match[index][0]])
    drawBidding.setAttribute("id", 'drawing'+index)
    secondBidding.setAttribute("id", teamArray[match[index][1]])
    firstBidding.setAttribute("class","bidding")
    drawBidding.setAttribute("class", "bidding")
    secondBidding.setAttribute("class", "bidding")
    const fristCoef=document.createElement('span');
    const drawCoef=document.createElement('span');
    const secondCoef=document.createElement('span');
    const fristInput=document.createElement('input');
    const drawInput=document.createElement('input');
    const secondInput=document.createElement('input');
    fristInput.setAttribute('type', 'number');
    drawInput.setAttribute('type', 'number');
    secondInput.setAttribute('type', 'number');
    frist.textContent='1';
    draw.textContent='X';
    second.textContent='2';
    fristCoef.textContent=coeficients[0];
    drawCoef.textContent=coeficients[1];
    secondCoef.textContent=coeficients[2];
    firstBidding.appendChild(frist);
    drawBidding.appendChild(draw);
    secondBidding.appendChild(second);
    firstBidding.appendChild(fristCoef);
    drawBidding.appendChild(drawCoef);
    secondBidding.appendChild(secondCoef);
    firstBidding.appendChild(fristInput);
    drawBidding.appendChild(drawInput);
    secondBidding.appendChild(secondInput);

    const Team_2=document.createElement('div');
    const img_1=document.createElement('img');
    const img_2=document.createElement('img');
    img_1.src=path + teamArray[match[index][0]]+'.png';
    img_2.src=path + teamArray[match[index][1]]+'.png';
    TeamBox.setAttribute("class","team-box");
    TeamBox.setAttribute("id",index);
    Team_1.setAttribute("class","team");
    Team_1.appendChild(img_1);
    MatchCoef.setAttribute("class","matchcoef");
    Team_2.setAttribute("class","team");
    Team_2.appendChild(img_2);
    TeamBox.appendChild(Team_1);
    TeamBox.appendChild(MatchCoef);
    TeamBox.appendChild(Team_2);
    teamFirst.appendChild(TeamBox)
}

for (let index = 7; index < 14; index++) {
    let coeficients = generateCoeficients();
    const TeamBox=document.createElement('div');
    const Team_1=document.createElement('div');
    const MatchCoef=document.createElement('div');
    const Suggestions=document.createElement('div');
    const playGame=document.createElement('button');
    const startMatch=document.createElement('p');
    startMatch.setAttribute('id',index);
    MatchCoef.appendChild(Suggestions);
    playGame.setAttribute('id', index);
    playGame.textContent='BET'
    MatchCoef.appendChild(playGame);
    MatchCoef.appendChild(startMatch);
    const firstBidding=document.createElement('div');
    const drawBidding=document.createElement('div');
    const secondBidding=document.createElement('div');
    Suggestions.setAttribute('class','suggestions');
    Suggestions.appendChild(firstBidding);
    Suggestions.appendChild(drawBidding);
    Suggestions.appendChild(secondBidding);
    const frist=document.createElement('span');
    const draw=document.createElement('span');
    const second=document.createElement('span');
    firstBidding.setAttribute("id", teamArray[match[index][0]])
    drawBidding.setAttribute("id", 'drawing'+index)
    secondBidding.setAttribute("id", teamArray[match[index][1]])
    firstBidding.setAttribute("class","bidding")
    drawBidding.setAttribute("class", "bidding")
    secondBidding.setAttribute("class", "bidding")
    const fristCoef=document.createElement('span');
    const drawCoef=document.createElement('span');
    const secondCoef=document.createElement('span');
    const fristInput=document.createElement('input');
    const drawInput=document.createElement('input');
    const secondInput=document.createElement('input');
    fristInput.setAttribute('type', 'number');
    drawInput.setAttribute('type', 'number');
    secondInput.setAttribute('type', 'number');
    frist.textContent='1';
    draw.textContent='X';
    second.textContent='2';
    fristCoef.textContent=coeficients[0];
    drawCoef.textContent=coeficients[1];
    secondCoef.textContent=coeficients[2];
    firstBidding.appendChild(frist);
    drawBidding.appendChild(draw);
    secondBidding.appendChild(second);
    firstBidding.appendChild(fristCoef);
    drawBidding.appendChild(drawCoef);
    secondBidding.appendChild(secondCoef);
    firstBidding.appendChild(fristInput);
    drawBidding.appendChild(drawInput);
    secondBidding.appendChild(secondInput);

    const Team_2=document.createElement('div');
    const img_1=document.createElement('img');
    const img_2=document.createElement('img');
    img_1.src=path + teamArray[match[index][0]]+'.png';
    img_2.src=path + teamArray[match[index][1]]+'.png';
    TeamBox.setAttribute("class","team-box");
    TeamBox.setAttribute("id",index);
    Team_1.setAttribute("class","team");
    Team_1.appendChild(img_1);
    MatchCoef.setAttribute("class","matchcoef");
    Team_2.setAttribute("class","team");
    Team_2.appendChild(img_2);
    TeamBox.appendChild(Team_1);
    TeamBox.appendChild(MatchCoef);
    TeamBox.appendChild(Team_2);
    teamSecond.appendChild(TeamBox)
}

for (let index = 14; index < 15; index++) {
    const Match=document.getElementById('match');
    const resultBox=document.createElement('div');
    resultBox.setAttribute('class', 'result-box')
    const resultMatch=document.createElement('div');
    const matchTime=document.createElement('p');
    matchTime.setAttribute('id',"counter");
    resultMatch.setAttribute('class','result');
    resultMatch.setAttribute('id','result');
    const resultA=document.createElement('div');
    resultA.setAttribute('class','resultA');
    resultA.setAttribute('id','resultA');
    const resultB=document.createElement('div');
    resultB.setAttribute('class','resultB');
    resultB.setAttribute('id','resultB');
    resultBox.appendChild(matchTime);
    const span=document.createElement('span');
    const GoalSpan=document.createElement('span');
    GoalSpan.setAttribute('class','goal')
    GoalSpan.setAttribute('id','goal')
    const Team_A=document.createElement('div');
    const Team_B=document.createElement('div');
    const img_1=document.createElement('img');
    const img_2=document.createElement('img');
    img_1.src=path + teamArray[match[index][0]]+'.png';
    img_2.src=path + teamArray[match[index][1]]+'.png';
    Team_A.setAttribute("class","teamA");
    Team_A.appendChild(img_1);
    Team_B.setAttribute("class","teamB");
    Team_B.appendChild(img_2);
    resultA.innerHTML='1';
    span.innerHTML='-';
    resultB.innerHTML='2';
    GoalSpan.textContent='gooaal !!!'
    resultMatch.appendChild(resultA);
    resultMatch.appendChild(span);
    resultMatch.appendChild(resultB);
    Match.appendChild(Team_A);
    resultBox.appendChild(resultMatch);
    Match.appendChild(resultBox);
    Match.appendChild(Team_B);
    Match.appendChild(GoalSpan);
}

function startAnimation() {
    const animatedText = document.getElementById('goal');
    animatedText.style.animationPlayState = 'running';
}

const playMatch=document.querySelectorAll('button');


playMatch.forEach((play, index) => {
    playMatch[index].addEventListener('click', ()=>{
        const matchTeam = play.parentNode;
        const Teams = matchTeam.parentNode;
        const teamElements = Teams.querySelectorAll('.team');
        const TeamA=document.querySelector('.teamA img');
        const TeamB=document.querySelector('.teamB img');
        const team1ImageSrc = teamElements[0].querySelector('img').src;
        const team2ImageSrc = teamElements[1].querySelector('img').src;
        const match=document.getElementById('match');
        const result=document.getElementById('result');
        const resultA = document.getElementById("resultA");
        const resultB = document.getElementById("resultB");
        const suggestions=matchTeam.querySelector(".suggestions");
        const bidding=suggestions.querySelectorAll('.bidding');
        const biddingTeamA=bidding[0];
        const biddingDraw=bidding[1];
        const biddingTeamB=bidding[2];
        const еlementsTeamA=biddingTeamA.querySelectorAll('*');
        const еlementsTeamDraw=biddingDraw.querySelectorAll('*');
        const еlementsTeamB=biddingTeamB.querySelectorAll('*');
        const coefPriceA=еlementsTeamA[1].textContent;
        const coefPriceDraw=еlementsTeamDraw[1].textContent;
        const coefPriceB=еlementsTeamB[1].textContent;
        const betPriceA=еlementsTeamA[2].value;
        const betPriceDraw=еlementsTeamDraw[2].value;
        const betPriceB=еlementsTeamB[2].value;
        // console.log(betPriceA);
        // console.log(betPriceDraw);
        // console.log(betPriceB);
        // console.log(coefPriceA);
        // console.log(coefPriceDraw);
        // console.log(coefPriceB);

        // if(betPriceA!=='')
        // {
        //     console.log(typeof(betPriceA));
        // }

        function startCountdown() {
            const startMatch=matchTeam.querySelector('p');
            startMatch.innerHTML='starт in 5 seconds';
            startMatch.style.textTransform='capitalize';
            let seconds = 4;
          
            function countdown() {
              if (seconds >= 1) {
                console.log(seconds);
                startMatch.innerHTML = seconds + ' seconds'; // Изведете текущата стойност на секундите в елемента "startMatch"
                seconds -= 1;
              } else {
                startMatch.innerHTML = "started";
                TeamA.src = team1ImageSrc;
                TeamB.src = team2ImageSrc;
                // Game STARTED 
                clearInterval(intervalId); 
                StartMatch(); 
              }
            }
          
            const intervalId = setInterval(countdown, 1000);
          
            function StartMatch() {
              if (seconds <= 0) {
                let time = 0;
                let goalA=0;
                let goalB=0;
                let counterElement = document.getElementById('counter');
                counterElement.style.display='block';
                let interval = setInterval(function () {
                    var teamScoreA = 0.015; // 20% шанс за отбор 1
                    var teamScoreB = 0.016; // 30% шанс за отбор 2

                    function updateScoreboard() {
                        resultA.textContent=+ goalA;
                        resultB.textContent=+ goalB;
                    }
                    if (Math.random() < teamScoreA) {
                        goalA++;
                        const goal = document.getElementById('goal');
                        goal.classList.toggle('active');
                        setTimeout(function() {
                            animatedText.classList.remove('active');
                        }, 5000);
                    }
                    if (Math.random() < teamScoreB) {
                        goalB++;
                        const goal = document.getElementById('goal');
                        goal.classList.toggle('active');
                        setTimeout(function() {
                            animatedText.classList.remove('active');
                        }, 5000);
                    }
                    updateScoreboard();
                    time++;
                    counterElement.innerHTML = time + ':00';
                    if (time === 45) {
                        clearInterval(interval);
                        counterElement.innerHTML = 'Half Тime';
                        setTimeout(function () {
                            match.style.flexDirection='row-reverse';
                            result.style.flexDirection='row-reverse';
                            counterElement.innerHTML = time + ':00';
                            interval = setInterval(function () {
                                time++;
                                counterElement.innerHTML = time + ':00';
                                if (Math.random() < teamScoreA) {
                                    goalA++;
                                    const goal = document.getElementById('goal');
                                    goal.classList.toggle('active');
                                    setTimeout(function() {
                                        animatedText.classList.remove('active');
                                    }, 5000);
                                }
                                if (Math.random() < teamScoreB) {
                                    goalB++;
                                    const goal = document.getElementById('goal');
                                    goal.classList.toggle('active');
                                    setTimeout(function() {
                                        animatedText.classList.remove('active');
                                    }, 5000);
                                }
                                updateScoreboard();
                                if (time >= 90) {
                                    clearInterval(interval);
                                    if(parseInt(resultA.textContent)===parseInt(resultB.textContent)){
                                        clearInterval(interval);
                                        counterElement.innerHTML = 'Extra Тime';
                                        setTimeout(function (){
                                            match.style.flexDirection='row-reverse';
                                            result.style.flexDirection='row-reverse';
                                            interval=setInterval(function(){
                                                time++;
                                                counterElement.innerHTML = time + ':00'; 
                                                if(time===105){
                                                    clearInterval(interval);
                                                    counterElement.innerHTML = 'Half Тime';
                                                    setTimeout(function(){
                                                        setInterval(function(){
                                                            time++;
                                                            counterElement.innerHTML = time + ':00'; 
                                                            if(time>=120)
                                                            {
                                                                counterElement.innerHTML = 'Finished The Match';
                                                                if(parseInt(resultA.textContent)===parseInt(resultB.textContent)){
                                                                    if(betPriceDraw!=='')
                                                                    {
                                                                        alert('You win:' + parseFloat(betPriceDraw)*parseFloat(coefPriceDraw) + '$');
                                                                    }else{
                                                                        alert('You lose:' + parseFloat(betPriceDraw) + '$');
                                                                    }   
                                                                }else if(parseInt(resultA.textContent)>parseInt(resultB.textContent))
                                                                {
                                                                    if(betPriceA!=='')
                                                                    {
                                                                        alert('You win:' + parseInt(betPriceA)*parseInt(coefPriceA) + '$');
                                                                    }else{
                                                                        alert('You lose:' + parseInt(betPriceA) + '$');
                                                                    }   
                                                                }else{
                                                                    if(betPriceB!=='')
                                                                    {
                                                                        alert('You win:' + parseFloat(betPriceB)*parseFloat(coefPriceB) + '$');
                                                                    }else{
                                                                        alert('You lose:' + parseFloat(betPriceB) + '$');
                                                                    }  
                                                                }
                                                            }
                                                        },1000)
                                                    },3000)
                                                }
                                            },1000)
                                        },3000)
                                    }else
                                    {
                                        counterElement.innerHTML = 'Finished The Match';
                                        if(parseInt(resultA.textContent)===parseInt(resultB.textContent)){
                                            if(betPriceDraw!=='')
                                            {
                                                alert('You win:' + parseFloat(betPriceDraw)*parseFloat(coefPriceDraw) + '$');
                                            }else{
                                                alert('You lose:' + parseFloat(betPriceDraw) + '$');
                                            }                                         
                                        }else if(parseInt(resultA.textContent)>parseInt(resultB.textContent))
                                        {
                                            if(betPriceA!=='')
                                            {
                                                alert('You win:' + parseFloat(betPriceA)*parseFloat(coefPriceA) + '$');
                                            }else{
                                                alert('You lose:' + parseFloat(betPriceA) + '$');
                                            }   
                                        }else{
                                            if(betPriceB!=='')
                                            {
                                                alert('You win:' + parseFloat(betPriceB)*parseFloat(coefPriceB) + '$');
                                            }else{
                                                alert('You lose:' + parseFloat(betPriceB) + '$');
                                            }   
                                        }
                                    }
                                }
                            }, 1000);
                        }, 3000);
                    }
                }, 1000);
              } else {
                console.log("No Started The Match"); 
              }
            }
        }
          
        startCountdown();
    }) 
});


  





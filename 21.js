var card= document.getElementById("cards")

var total = document.getElementById("total")
var message = document.getElementById("message")
var cmessage = document.getElementById("cmessage")
var ctotal = document.getElementById("ctotal")
var pcard = []
var sum = 0
var win = false
var game = true 
var sgame = false
var csum = 0
var ccard = []

var player = prompt("Enter player name")
var amount = prompt("Enter the amount ")

function getcrandom(){
    var crandom = Math.floor(Math.random()*13+1)
    if( crandom>10){
        return 10
    }
    else if(crandom == 1){
        return 11 
    }
    else{
    return crandom 

    } 
}

function getrandom(){
    var random = Math.floor(Math.random()*13+1)
    if( random>10){
        return 10
    }
    else if(random == 1){
        return 11 
    }
    else{
    return random 

    }
}
function start(){
    sgame = true
    var num1= getrandom()
    var num2= getrandom()
    var num3 = getcrandom()
    var num4 = getcrandom()
    csum = num3+num4
    ccard = [num3 , num4]
    sum = num1 + num2 
    pcard = [num1,num2]
    render()
}
function newcard(){
    
    if(win == false && game == true && sgame == true){
    var num = getrandom()
    pcard.push(num)
    sum += num

    while(csum <19){
        var cnum = getcrandom()
        csum += cnum
    }
   

    render()
    if(sum>21){
        winner()
    }
    }
}

function render(){
    card.innerHTML="CARDS: "
    
    
    for(var i=0;i<pcard.length;i++){
        card.innerHTML+= ` ${pcard[i]}`

    }
    total.innerHTML = `TOTAL: ${sum}`
    ctotal.innerHTML =`COMPUTER TOTAL: ${csum}`

    if(sum<21){
        message.innerHTML=" Do you want another card"
        
        
    }
    else if(sum==0||csum==0||ctotal==0||total==0){
        message.innerHTML=`Start the game`

    
    }
    else if(sum==21 && sum<21 && total==21){
        amount *=2
        message.innerHTML=`${player} , you won Rs.${amount}`
        win = true

    }
    else{
        message.innerHTML=`${player} lost the game`
        game = false 

    }
    
}
function winner(){
    if(sgame=true){
    while(csum <17 && csum<sum){
        var cnum = getcrandom()
        csum += cnum
    }
}
    ctotal.innerHTML=`COMPUTER TOTAL: ${csum}`

    if(sum>21|| csum<=21 && csum>sum ){
    message.innerHTML= `${player} lost the game`
}
else if(sum == csum){
    message.innerHTML=`ITS A TIE`
}
else if(sum==0||csum==0||ctotal==0||total==0){
    message.innerHTML=`Start the game`

}
else{
    amount *=2
        message.innerHTML=`${player} , you won Rs.${amount}`
}
game=false

}

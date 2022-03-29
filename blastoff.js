//for the assignment, we need a timer to count down from 50 to 0 by 5 sec increments and show blastOff at 0
//for my example

function blastOffTimer()
{
    console.log("blastOffTimer() started")
    var currtime = 50;
    var i = 5;
    var timeMult = 5000;
    document.getElementById("blastOffText").innerHTML = currtime;
    console.log(currtime)
    currtime = currtime - i;
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, timeMult)
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 2 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 3 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 4 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 5 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 6 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 7 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 8 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = currtime;
        currtime = currtime - i;
    }, 9 * timeMult);
    setTimeout(function(){
        console.log(currtime)
        document.getElementById("blastOffText").innerHTML = "Blast Off!";
        currtime = currtime - i;
    }, 10
     * timeMult);
}

currTime = 0;
function testCtnDown()
{
    console.log("testCtnDown() started");
    //variable to track time
    currTime = 50
    //for loop to save typing
    for(var i = 0; i <= 10; i++)
    {
        console.log(i);
        setTimeout(function()
        {
            if(currTime == 0)
            //if we are done and need blastoff
            {
                document.getElementById("blastOffText").innerHTML = "Blast off";
            }
            else if(currTime < 25)
            //bc the admiral wants this
            {
                document.getElementById("blastOffText").innerHTML = 
                    "Warning less than 1/2 way to launch, time left = " + currTime;
            }
            else
            //everything else
            {
                document.getElementById("blastOffText").innerHTML = currTime;
            }
            //we are iterating by 5s
            currTime = currTime - 5;
            //5000 to wait 5 sec between counts
        }, 5000 * i)
    }
}


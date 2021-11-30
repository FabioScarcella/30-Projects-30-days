setInterval(calculateNewTime, 1000)
calculateNewTime()


function calculateNewTime(){
    //Get dates
    const today = new Date()
    const hours = today.getHours()
    const minutes = today.getMinutes()
    const seconds = today.getSeconds()

    //Get current rotation
    const hoursRotation = calculateRotation(hours, 12)
    const minutesRotation = calculateRotation(minutes, 60)
    const secondsRotation = calculateRotation(seconds, 60)

    //Add the rotation
    const hourHTML = document.querySelector('.hour-hand')
    hourHTML.style.transform = `rotate(${hoursRotation}deg)`
    const minuteHTML = document.querySelector('.min-hand')
    minuteHTML.style.transform = `rotate(${minutesRotation}deg)`
    const secondHTML = document.querySelector('.second-hand')
    secondHTML.style.transform = `rotate(${secondsRotation}deg)`

    
}

function calculateRotation(time, maxTime){
    return (time * 360) / maxTime + 90
}
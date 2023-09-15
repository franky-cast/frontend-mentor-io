let advice
let adviceId

let adviceHtml = document.getElementById("advice")
let idHtml = document.getElementById("advice-id")

function fetchAdvice () {
    fetch("https://api.adviceslip.com/advice").then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceObj = adviceData.slip;
        console.log(adviceObj)

        advice = adviceObj.advice
        adviceId = adviceObj.id

        adviceHtml.innerHTML = advice
        idHtml.innerHTML = "advice #" + adviceId
    })
}


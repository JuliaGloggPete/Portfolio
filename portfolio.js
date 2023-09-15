let answers =["Ja!","Absolut!", "Du kommer inte att ångra dig!", "100%", "Självklart!", "Rekommenderas starkt!", 
"Så sent som igår!", "Tveka inte!"]

document.querySelector("#hire_button").addEventListener('click', function newAnswer() {
    let newAnswer = Math.floor(Math.random()*answers.length);
    document.getElementById("answers").innerText = answers[newAnswer];
    console.log("click");
})
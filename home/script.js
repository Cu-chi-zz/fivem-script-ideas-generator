var genButton = document.createElement("button");

genButton.onclick = function() { 
    var mainText = document.getElementById("genidea-text");
    mainText.textContent = "Something related to the " + Theme[Math.floor(Math.random() * Theme.length)] + " combined with " + Theme2[Math.floor(Math.random() * Theme2.length)];
    GenerateButton("next");
}

function GenerateButton(txt) {
    genButton.id = "generation";
    genButton.textContent = txt;
    document.getElementById("genidea-text").appendChild(genButton);
}

GenerateButton("now")
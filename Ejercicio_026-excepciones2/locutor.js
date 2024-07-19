//npm install gtts
//npm install play-sound

const gTTS = require('gtts');//Text to speech - Conversor de texto a mp3
const player = require('play-sound')(opts = {})//Lector de fichero

function speechText(speech, language = 'es') {
    const gtts = new gTTS(speech, language);
    const fileName = 'speech.mp3';
    gtts.save(fileName, function (err, result) {
        if (err) {
            throw new Error(err);
        } else {
            console.log("Text to speech converted!");
            player.play(fileName, function (err) {
                if (err) throw err
            })
        }
    });
}

//speechText("Mañana vamos al parque");
//speechText("Domani andiamo al parco", "it");
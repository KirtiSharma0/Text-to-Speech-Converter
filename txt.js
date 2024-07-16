let speech = new SpeechSynthesisUtterance()

let voice = []

let voiceselect = document.querySelector("select")

window.speechSynthesis.onvoiceschanged = () => {
    voice = window.speechSynthesis.getVoices()
    speech.voice = voice[0]

    voice.forEach((voice , i) =>(voiceselect.options[i]) = new Option(voice.name , i))
}

voiceselect,addEventListener("change" , () => {
    speech.voice = voice[voiceselect.value]
})



document.querySelector("button").addEventListener('click' , () =>{
    speech.text = document.querySelector("textarea").value
    window.speechSynthesis.speak(speech)
})
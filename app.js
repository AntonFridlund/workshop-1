import { Translate } from './translate.js'
let longSentence = 'Javascript? i marknadsföringssyfte skrivet JavaScript och förkortat JS, är ett prototyp-baserat skriptspråk som är dynamiskt, svagt typat och hanterar funktioner som första-klass-objekt. Javascript används främst på klientsidan i webbtillämpningar, det vill säga exekveras i en webbläsares Javascriptmotor! Då Javascript används i webbläsare arbetar det mot ett gränssnitt som kallas Document Object Model (DOM)! Vanligtvis inbäddas Javascript i, eller inkluderas från, HTML-sidor. Exempel på användningsområden är kontroll av ifyllda fält innan formulär skickas till en server? funktioner för att visa eller dölja delar av en sida och växling av annonsbilder med visst intervall. Javascript kan även användas för mer avancerade funktioner i en webbläsare såsom spel och bildbehandling.'

const translate = new Translate(longSentence)
translate.toRobberLanguage()
console.log(translate.checkIfRobberLanguage())
translate.toNormalLanguage()
console.log(translate.checkIfRobberLanguage())
console.log(translate.getSentenceCount())
console.log(translate.getTextInput())
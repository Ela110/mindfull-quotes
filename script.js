var quotes = [
'The most important thing is to enjoy your life – to be happy. It\’s all that matters. – Audrey Hepburn',
'Nothing can bring you happiness but yourself. – Ralph Waldo Emerson',
'Never regret anything that made you smile. – Mark Twain',
'Today I will focus on stressing less and feeling blessed',
'Happiness is the best makeup. – Drew Barrymore',
'Happiness is a state of mind. It\’s just according to the way you look at things. – Walt Disney',
'If you want to be happy, be. – Leo Tolstoy',
'Independence is happiness. – Susan B. Anthony',
'Think of all the beauty still left around you and be happy. – Anne Frank',
'Simplicity makes me happy. – Alicia Keys',
'Happiness is seeing life for what it is in all the little moments.'
]

var randomNumber = Math.floor(Math.random() * 11);

function newQuote () {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

console.log(newQuote);



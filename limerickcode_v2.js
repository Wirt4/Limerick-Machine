var verseA =[
           ["Einstein, the frizzy-haired", "said E equals MC squared", "Not my mass, my ass declared!"], 
           ["O Tuama! You boast yourself handy",  "At selling good ale and bright Brandy", "I tell you this, I, your friend, Andy."],
           ["There was a lewd whore from Nantucket", "who intended to pee in a bucket;",  "and her rattled john fled, crying: 'Fuck it!'", 
            "There once was a man from Nantucket", "Whose schlong was so long he could suck it", "If my earhole were bigger, I'd fuck it!",
            "But he followed the pair to Pawtucket", "The man and the girl with the bucket;", "But as for the bucket, Pawtucket."]
             ];
var verseB =[
["but being a man", "she missed the damn can", "But Nan and the man", "Stole the money and ran", "And he said to the man",
"He was welcome to Nan", "But his daughter, named Nan", "Ran away with a man", "With more as a man", "But sometimes he ran"],
["She started one day", 
"In a relative way"]
];
function getRhymes(verse){
	return verse[Math.floor(Math.random() * verse.length)]
}
x = getRhymes(verseA);
//getting first line and amending arrary
x.sort(function(a, b){return 0.5 - Math.random()});
var line1 = x.shift();
//getting second line and amending arrary
var line2 = x.shift();
var line5 = x.shift();

y = getRhymes(verseB);
y.sort(function(a, b){return 0.5 - Math.random()});
var line3 = y.shift();
var line4 = y.shift();

function pullStatement() {
    document.getElementById("statement").innerHTML = line1 + "</br>" + line2 + "</br>" + line3 + "</br>" + line4 + "</br>" + line5;
}
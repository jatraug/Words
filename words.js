

// words.js - squash words & like stuff

// Take a string and alphabetize its characters. Return a new string
function squash(phrase)
{
    phrase = phrase.toLowerCase();
    // alphabetize letters of a word
    var all = phrase.split("");
    var allS = all.sort();
//    var alpha = allS.join();
//    return alpha;
    var newStr = new String("");
    for (var i=0; i < allS.length; i++)
    {
        newStr = newStr.concat(allS[i]);
    }
    return newStr;

}


// Take the squashed value, get its associated word(s) from the dictionary
// and format the word(s) for output
function formatOutput(rawOutput)
{
    var retStr = new String("");
    try {
        var outArr = myObject[rawOutput];
        // Put all matching words in a string:
        for(var i=0; i< outArr.length; i++)
        {
            retStr = retStr.concat(outArr[i]);
            retStr = retStr.concat(" ");
        }
        
    }
    catch(err){
        // No match for the word - let user know:
        retStr = "Sorry - I got nothin'";
    }
    return retStr;
}


// <!-- React to clicking the button -->
function reactToClick()
{
    var textboxValue = document.getElementById("textbox").value;
    var retval = squash(textboxValue);
    // console.log(retval);

    // output into output box:
    var outBox = document.getElementById("outputbox");
    var outStr = formatOutput(retval);
    
    outBox.value = outStr;

}











//Junk I can't bear to throw away below here:

// console.log("hello");
////Object.keys(myObject).forEach(function(entry) {
//  console.log(entry);
/////var wordArr = new Array(myObject[entry]);
/////for(var i=0; i< wordArr.l/ength; i++)
/////{
     // console.log(wordArr[i]);
/////}
/////});
